import { DBGame } from "../game-state/db-game";
import { Hero } from "./heroes/hero";
import { ArenaType } from "./arenas/arena-type";
import { DBArena } from "../game-state/db-arena";
import { Arena } from "./arenas/arena";

export class Game {
    private dbModel: DBGame;
    public heroes: Hero[];
    public arenas: Arena[];

    public static load(dbGame: DBGame): Game {
        const game = new Game();
        game.dbModel = dbGame;
        game.heroes = dbGame.heroes.map(Hero.load);
        game.arenas = dbGame.arenas.map(Arena.load);
        return game;
    }

    public update (dTime: number): void {
        this.arenas.forEach(arena => arena.update(dTime));
    }

    public addHero(hero: Hero): void {
        this.dbModel.heroes.push(hero.dbModel);
        this.heroes.push(hero);
    }

    public spawnArena(type: ArenaType, level: number, heroes: Hero[]): Arena {
        const dbRooms = type.createDbRooms(level);
        const dbArena = <DBArena> {
            typeKey: type.key,
            startTime: new Date(),
            level: level,
            rooms: dbRooms,
            currentRoomIndex: 0
        };
        const arena = Arena.load(dbArena);

        this.dbModel.arenas.push(arena.dbModel);
        this.arenas.push(arena);

        arena.rooms[0].setHeroes(heroes);

        return arena;
    }
}