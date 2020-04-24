import { DBSkill } from "./db-skill";

export interface DBMonster {
    id: number;
    typeKey: string;
    level: number;
    currentHealth: number;
    isAlive: boolean;
    skills: DBSkill[];
}
