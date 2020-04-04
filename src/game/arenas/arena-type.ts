import { ArenaRoom } from "./arena-room";
import { Vector2 } from "../../common/vector2";

export class ArenaType {
    public key: string;
    public name: string;
    public description: string;
    public imageName: string;
    public position: Vector2;
    public level: number;
    public spawnRooms: (level: number) => ArenaRoom[];

    public static create(options: {
        key: string,
        name: string,
        description: string,
        imageName: string,
        position: Vector2,
        level: number,
        spawnRooms: (level: number) => ArenaRoom[]
    }): ArenaType {
        const arenaType = new ArenaType();
        arenaType.key = options.key;
        arenaType.name = options.name;
        arenaType.description = options.description;
        arenaType.imageName = options.imageName;
        arenaType.position = options.position;
        arenaType.level = options.level;
        arenaType.spawnRooms = options.spawnRooms;
        return arenaType;
    }
}