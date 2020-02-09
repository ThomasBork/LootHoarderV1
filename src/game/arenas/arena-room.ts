import { DBArenaRoom } from "../../game-state/db-arena-room";
import { Monster } from "../monsters/monster";
import { GameServices } from "../game-services";

export class ArenaRoom {
    private dbModel: DBArenaRoom;
    public monsters: Monster[];
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
}
