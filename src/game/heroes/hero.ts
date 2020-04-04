import { Attributes } from "../attributes/attributes";
import { DBHero } from "../../game-state/db-hero";
import { Observable, ObservableFactory } from "../../common/Observable";
import { HeroType } from "./hero-type";
import { GameServices } from "../game-services";

export class Hero {
    public dbModel: DBHero;
    public type: HeroType;
    public attributes: Attributes;
    public onDeath: Observable = ObservableFactory.create();

    public get id(): number { return this.dbModel.id }
    public get name(): string { return this.dbModel.name }

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
        this.type = GameServices.heroTypes.getByKey(this.dbModel.typeKey);
    }
}