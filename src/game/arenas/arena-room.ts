import { DBArenaRoom } from "../../game-state/db-arena-room";
import { Hero } from "../heroes/hero";
import { ArenaRoomEncounter } from "./arena-room-encounter";

export class ArenaRoom {
    public dbModel: DBArenaRoom;
    public encounters: ArenaRoomEncounter[];
    public heroes: Hero[];

    public get currentEncounter(): ArenaRoomEncounter {
        return this.encounters[this.dbModel.currentEncounterIndex];
    }

    public get currentEncounterIndex(): number { return this.dbModel.currentEncounterIndex; }

    public get hasPlayerLost(): boolean { return this.heroes.every(hero => !hero.isAlive); }

    public static load (dbArenaRoom: DBArenaRoom): ArenaRoom {
        const arenaRoom = new ArenaRoom();
        arenaRoom.dbModel = dbArenaRoom;
        arenaRoom.encounters = arenaRoom.dbModel.encounters.map(ArenaRoomEncounter.load);
        return arenaRoom;
    }

    public setHeroes(heroes: Hero[]): void {
        this.heroes = heroes;
        this.dbModel.heroIds = this.heroes.map(hero => hero.dbModel.id);
    }
}
