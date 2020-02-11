import { DBArenaRoom } from "../../game-state/db-arena-room";
import { Monster } from "../monsters/monster";
import { GameServices } from "../game-services";
import { Hero } from "../heroes/hero";

export class ArenaRoom {
    public dbModel: DBArenaRoom;
    public monsters: Monster[];
    public heroes: Hero[];

    public get currentMonster () {
        return this.monsters[this.dbModel.currentMonsterIndex];
    }

    public load (dbArenaRoom: DBArenaRoom): void {
        this.dbModel = dbArenaRoom;
        this.monsters = this.dbModel.monsters.map(dbMonster => {
            const monster = new Monster();
            monster.load(dbMonster);
            return monster;
        });
    }

    public setHeroes(heroes: Hero[]): void {
        this.heroes = heroes;
        this.dbModel.heroIds = this.heroes.map(hero => hero.dbModel.id);
    }
}
