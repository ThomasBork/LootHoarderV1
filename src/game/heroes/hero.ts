import { Attributes } from "../attributes/attributes";
import { DBHero } from "../../game-state/db-hero";
import { Observable, ObservableFactory } from "../../common/Observable";

export class Hero {
    public dbModel: DBHero;
    public attributes: Attributes;
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

    public load (dbHero: DBHero) {
        this.dbModel = dbHero;
        this.attributes = Attributes.create();
        if (this.dbModel.currentHealth === undefined) {
            this.dbModel.currentHealth = this.attributes.maximumHealth.value;
        }
    }
}