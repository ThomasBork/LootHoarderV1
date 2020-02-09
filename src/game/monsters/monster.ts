import { DBMonster } from "../../game-state/db-monster";
import { Attributes } from "../attributes/attributes";
import { MonsterType } from "./monster-type";
import { Observable, ObservableFactory } from "../../common/Observable";
import { GameServices } from "../game-services";

export class Monster {
    private dbModel: DBMonster;
    public attributes: Attributes;
    public type: MonsterType;
    public onDeath: Observable = ObservableFactory.create();

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

    public load (dbMonster: DBMonster): void {
        this.dbModel = dbMonster;
        this.attributes = Attributes.create();
        this.type = GameServices.monsterTypes.getByKey(this.dbModel.typeKey);
    }

    public recalculateAttributes(): void {
        this.type.attributesBase.all.forEach(attr => 
            this.attributes.get(attr.type).amount.setAdditiveModifier(attr, attr.amount.value)
        );

        this.type.attributesPerLevel.all.forEach(attr => 
            this.attributes.get(attr.type).amount.setAdditiveModifier(attr, attr.amount.value * this.dbModel.level)
        );
    }
}