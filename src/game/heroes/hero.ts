import { Attributes } from "../attributes/attributes";
import { DBHero } from "../../game-state/db-hero";
import { Observable, ObservableFactory, ObservableWith1Argument } from "../../common/observable";
import { HeroType } from "./hero-type";
import { GameServices } from "../game-services";
import { Skill } from "../skills/skill";
import { Item } from "../items/item";
import { ItemBodyLocation } from "../items/item-body-location";
import { KeyValuePair } from "../shared/key-value-pair";
import { DamageTakenEvent } from "../monsters/damage-taken-event";
import { DamageType } from "../skills/damage-type";

export class Hero {
    public dbModel: DBHero;
    public type: HeroType;
    public attributes: Attributes;
    private attributesFromLevel: Attributes;
    public skills: Skill[];
    public items: KeyValuePair<ItemBodyLocation, Item>[];

    public onDeath: Observable = ObservableFactory.create();
    public onDamageTaken: ObservableWith1Argument<DamageTakenEvent> = ObservableFactory.createWith1Argument<DamageTakenEvent>();
    public onLevelUp: ObservableWith1Argument<number> = ObservableFactory.createWith1Argument<number>();
    public onExperienceGained: ObservableWith1Argument<number> = ObservableFactory.createWith1Argument<number>();
    public onExperienceLost: ObservableWith1Argument<number> = ObservableFactory.createWith1Argument<number>();

    public get id(): number { return this.dbModel.id; }
    public get name(): string { return this.dbModel.name; }
    public get level(): number { return this.dbModel.level; }
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

    public static load (dbHero: DBHero): Hero {
        const hero = new Hero();
        hero.dbModel = dbHero;
        hero.type = GameServices.heroTypes.getByKey(hero.dbModel.typeKey);

        hero.attributes = Attributes.create();
        hero.type.attributesBase.all.forEach(baseAttribute => 
            hero.attributes.get(baseAttribute.type).amount.setAdditiveValueContainer(baseAttribute.amount)
        );
        hero.attributesFromLevel = Attributes.create();
        hero.type.attributesPerLevel.all.forEach(perLevelAttribute => {
            const attributeFromLevelValueContainer = hero.attributesFromLevel.get(perLevelAttribute.type).amount;
            attributeFromLevelValueContainer.setAdditiveValueContainer(perLevelAttribute.amount);
            attributeFromLevelValueContainer.setMultiplicativeModifier(hero, hero.dbModel.level);
            hero.onLevelUp.addSubscription(hero, level => attributeFromLevelValueContainer.setMultiplicativeModifier(hero, hero.dbModel.level));
            hero.attributes.get(perLevelAttribute.type).amount.setAdditiveValueContainer(attributeFromLevelValueContainer);
        });

        hero.skills = hero.dbModel.skills.map(Skill.load);
        hero.skills.forEach(skill => skill.type.setUpValueContainers(hero, skill));
        hero.items = hero.dbModel.items.map(kvp => {
            return {
                key: kvp.key,
                value: Item.load(kvp.value)
            };
        });
        hero.items.forEach(kvp => 
            kvp.value.implicitPassiveAbilities.forEach(passiveAbility => 
                passiveAbility.type.applyEffect(passiveAbility, hero)));

        if (dbHero.currentHealth === undefined) {
            dbHero.currentHealth = hero.attributes.maximumHealth.value;
        }
        return hero;
    }

    public giveExperience(amount: number): void {
        this.dbModel.experience += amount;
        let requiredExperience = GameServices.hero.getAmountOfExperienceRequiredToAdvanceFromLevel(this.level);
        let levelUp = false;
        while (this.dbModel.experience >= requiredExperience) {
            this.dbModel.experience -= requiredExperience;
            this.dbModel.level++;
            levelUp = true;
            requiredExperience = GameServices.hero.getAmountOfExperienceRequiredToAdvanceFromLevel(this.level);
        }
        if (levelUp) {
            this.onLevelUp.notify(this.dbModel.level);
        }
        this.onExperienceGained.notify(amount);
    }

    public removeExperience(amount: number): void {
        const previousAmount = this.dbModel.experience;
        this.dbModel.experience -= amount;
        if (this.dbModel.experience < 0) {
            this.dbModel.experience = 0;
        }
        const newAmount = this.dbModel.experience;
        this.onExperienceLost.notify(previousAmount - newAmount);
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
