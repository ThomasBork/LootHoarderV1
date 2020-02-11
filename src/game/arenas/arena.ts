import { DBArena } from "../../game-state/db-arena";
import { ArenaRoom } from "./arena-room";
import { ArenaType } from "./arena-type";
import { GameServices } from "../game-services";

export class Arena {
    public dbModel: DBArena;
    public type: ArenaType;
    public rooms: ArenaRoom[];

    public load (dbArena: DBArena): void {
        this.dbModel = dbArena;

        this.type = GameServices.arenaTypes.getByKey(dbArena.typeKey);

        this.rooms = dbArena.rooms.map(dbRoom => {
            const room = new ArenaRoom();
            room.load(dbRoom);
            return room;
        });
    }
}
