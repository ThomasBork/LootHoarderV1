import { ArenaRoom } from "./arena-room";
import { Vector2 } from "../../common/vector2";

export class ArenaType {
    public key: string;
    public name: string;
    public description: string;
    public imageName: string;
    public position: Vector2;
    public spawnRooms: (level: number) => ArenaRoom[];
}