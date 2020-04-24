import { DBHero } from "./db-hero";
import { DBArena } from "./db-arena";
import { DBItem } from "./db-item";

export interface DBGame {
    version: string;
    startTime: Date;
    heroes: DBHero[];
    arenas: DBArena[];
    items: DBItem[];
}
