import { Observable, ObservableFactory } from "../common/Observable";
import { DBGame } from "../game-state/db-game";
import { GameController } from "./game-controller";
import { Hero } from "./heroes/hero";

export class Game {
    private dbModel: DBGame;
    public heroes: Hero[];

    public load(dbGame: DBGame): void {
        this.dbModel = dbGame;
        this.heroes = this.dbModel.heroes.map(dbHero => {
            const hero = new Hero();
            hero.load(dbHero);
            return hero;
        });
    }

    public update (dTime: number): void {
    }

    public addHero(hero: Hero): void {
        this.dbModel.heroes.push(hero.dbModel);
        this.heroes.push(hero);
    }
}