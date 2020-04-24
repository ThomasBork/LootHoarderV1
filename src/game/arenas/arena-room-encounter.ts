import { Monster } from "../monsters/monster";
import { DBArenaRoomEncounter } from "../../game-state/db-arena-room-encounter";

export class ArenaRoomEncounter {
    public dbModel: DBArenaRoomEncounter;
    public monsters: Monster[];

    public static load (dbArenaRoomEncounter: DBArenaRoomEncounter): ArenaRoomEncounter {
        const arenaRoomEncounter = new ArenaRoomEncounter();
        arenaRoomEncounter.dbModel = dbArenaRoomEncounter;
        arenaRoomEncounter.monsters = arenaRoomEncounter.dbModel.monsters.map(Monster.load);
        return arenaRoomEncounter;
    }
}
