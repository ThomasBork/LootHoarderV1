import { DBArena } from "../../game-state/db-arena";
import { ArenaRoom } from "./arena-room";
import { ArenaType } from "./arena-type";

export class Arena {
    private dbModel: DBArena;
    public type: ArenaType;
    public rooms: ArenaRoom[];
}
