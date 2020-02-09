import { DBHero } from "./db-hero";

export interface DBGame {
    version: string;
    startTime: Date;
    heroes: DBHero[];
}
