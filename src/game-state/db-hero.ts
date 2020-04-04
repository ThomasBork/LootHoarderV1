import { DBSkill } from "./db-skill";
import { DBArena } from "./db-arena";

export interface DBHero {
    id: number;
    typeKey: string;
    name: string;
    level: number;
    experience: number;
    currentHealth: number;
    isAlive: boolean;
    skills: DBSkill[];
}
