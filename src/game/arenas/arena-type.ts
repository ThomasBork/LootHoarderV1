import { ArenaRoom } from "./arena-room";

export class ArenaType {
    public key: string;
    public name: string;
    public description: string;
    public imageName: string;
    public spawnRooms: (level: number) => ArenaRoom[];
}