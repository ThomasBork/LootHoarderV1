import { DBArenaRoomEncounter } from "./db-arena-room-encounter";

export interface DBArenaRoom {
    typeKey: string;
    encounters: DBArenaRoomEncounter[];
    heroIds: number[];
    currentEncounterIndex: number;
}
