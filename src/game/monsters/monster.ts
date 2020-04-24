import { DBMonster } from "../../game-state/db-monster";
import { Attributes } from "../attributes/attributes";
import { MonsterType } from "./monster-type";
import { Observable, ObservableFactory, ObservableWith1Argument } from "../../common/observable";
import { GameServices } from "../game-services";
import { Skill } from "../skills/skill";
import { DamageType } from "../skills/damage-type";
import { DamageTakenEvent } from "./damage-taken-event";

export class Monster {
    private dbModel: DBMonster;
    public type: MonsterType;
    public attributes: Attributes;
    private attributesFromLevel: Attributes;
    public skills: Skill[];
    public onDeath: Observable = ObservableFactory.create();
    public onDamageTaken: ObservableWith1Argument<DamageTakenEvent> = ObservableFactory.createWith1Argument();

    public get id(): number { return this.dbModel.id; }
    public get name(): string { return this.type.name; }
    public get isAlive(): boolean { return this.dbModel.isAlive; }

    public get currentHealth(): number {
        return this.dbModel.currentHealth;
    }
    public set currentHealth(value: number) {
        this.dbModel.currentHealth = value;
        if (this.dbModel.currentHealth <= 0 && !this.dbModel.isAlive) {
            this.dbModel.isAlive = false;
            this.onDeath.notify();
        }
    }

    public static load (dbMonster: DBMonster): Monster {
        const monster = new Monster();
        monster.dbModel = dbMonster;
        monster.type = GameServices.monsterTypes.getByKey(monster.dbModel.typeKey);
        monster.attributes = Attributes.create();
        monster.type.attributesBase.all.forEach(baseAttribute => 
            monster.attributes.get(baseAttribute.type).amount.setAdditiveValueContainer(baseAttribute.amount)
        );
        monster.attributesFromLevel = Attributes.create();
        monster.type.attributesPerLevel.all.forEach(perLevelAttribute => {
            const attributeFromLevelValueContainer = monster.attributesFromLevel.get(perLevelAttribute.type).amount;
            attributeFromLevelValueContainer.setAdditiveValueContainer(perLevelAttribute.amount);
            attributeFromLevelValueContainer.setMultiplicativeModifier(monster, monster.dbModel.level);
            monster.attributes.get(perLevelAttribute.type).amount.setAdditiveValueContainer(attributeFromLevelValueContainer);
        });
        monster.skills = monster.dbModel.skills.map(Skill.load);
        monster.skills.forEach(skill => skill.type.setUpValueContainers(monster, skill));
        if (dbMonster.currentHealth === undefined) {
            dbMonster.currentHealth = monster.attributes.maximumHealth.value;
        }
        return monster;
    }


    public recalculateAttributes(): void {
        this.type.attributesBase.all.forEach(attr => 
            this.attributes.get(attr.type).amount.setAdditiveModifier(attr, attr.amount.value)
        );

        this.type.attributesPerLevel.all.forEach(attr => 
            this.attributes.get(attr.type).amount.setAdditiveModifier(attr, attr.amount.value * this.dbModel.level)
        );
    }

    public takeDamage(amount: number, type: DamageType): void {
        this.currentHealth -= amount;
        if (this.currentHealth <= 0) {
            this.currentHealth = 0;
            this.dbModel.isAlive = false;
        }
        this.onDamageTaken.notify({
            amount: amount,
            type: type
        });
    }
}