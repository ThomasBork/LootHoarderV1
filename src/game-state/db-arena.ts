import { DBArenaRoom } from "./db-arena-room";

export interface DBArena {
    typeKey: string;
    level: number;
    rooms: DBArenaRoom[];
    currentRoomIndex: number;
    startTime: Date;
}
