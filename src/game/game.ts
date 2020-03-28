import { Observable, ObservableFactory } from "../common/Observable";
import { DBGame } from "../game-state/db-game";
import { Hero } from "./heroes/hero";
import { ArenaType } from "./arenas/arena-type";
import { DBArena } from "../game-state/db-arena";
import { Arena } from "./arenas/arena";

export class Game {
    private dbModel: DBGame;
    public heroes: Hero[];
    public arenas: Arena[];

    public load(dbGame: DBGame): void {
        this.dbModel = dbGame;
        this.heroes = this.dbModel.heroes.map(dbHero => {
            const hero = new Hero();
            hero.load(dbHero);
            return hero;
        });

        this.arenas = this.dbModel.arenas.map(dbArena => {
            const arena = new Arena();
            arena.load(dbArena);
            return arena;
        });
    }

    public update (dTime: number): void {
        //console.log("Game", this.dbModel);
    }

    public addHero(hero: Hero): void {
        this.dbModel.heroes.push(hero.dbModel);
        this.heroes.push(hero);
    }

    public spawnArena(type: ArenaType, level: number, heroes: Hero[]): void {
        const rooms = type.spawnRooms(level);
        const dbArena = <DBArena> {
            typeKey: type.key,
            startTime: new Date(),
            level: level,
            rooms: [],
            currentRoomIndex: 0
        };
        const arena = new Arena();
        arena.load(dbArena);

        arena.dbModel.rooms = rooms.map(room => room.dbModel);
        arena.rooms = rooms;

        this.dbModel.arenas.push(arena.dbModel);
        this.arenas.push(arena);

        arena.rooms[0].setHeroes(heroes);
    }
}