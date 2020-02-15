import { DBSkill } from "./db-skill";
import { DBArena } from "./db-arena";

export interface DBMonster {
    typeKey: string;
    level: number;
    currentHealth: number;
    isAlive: boolean;
    skills: DBSkill[];
}