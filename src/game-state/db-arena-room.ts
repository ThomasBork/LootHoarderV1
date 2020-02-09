import { DBMonster } from "./db-monster";
import { DBHero } from "./db-hero";

export interface DBArenaRoom {
    typeKey: string;
    monsters: DBMonster[];
    heroIds: number[];
    currentMonsterIndex: number;
}
