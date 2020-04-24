import { MonsterType } from "./monster-type";
import { DBMonster } from "../../game-state/db-monster";
import { DBSkill } from "../../game-state/db-skill";

export class MonsterService {
    private nextMonsterId: number = 1;
    
    public createDBMonster(level: number, type: MonsterType): DBMonster {
        const dbMonster = <DBMonster> {
            id: this.nextMonsterId++,
            typeKey: type.key,
            level: level,
            isAlive: true,
            skills: type.skillTypes.map(skillType => {
                return <DBSkill> {
                    remainingCooldown: 0, 
                    typeKey: skillType.value.key
                }
            })
        };

        return dbMonster;
    }
}
