import { DBHero } from "./db-hero";
import { DBArena } from "./db-arena";

export interface DBGame {
    version: string;
    startTime: Date;
    heroes: DBHero[];
    arenas: DBArena[];
}
