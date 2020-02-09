import { MonsterType } from "./monster-type";
import { DBMonster } from "../../game-state/db-monster";
import { DBSkill } from "../../game-state/db-skill";
import { Monster } from "./monster";

export class MonsterService {
    public createMonster(level: number, type: MonsterType): Monster {
        const dbMonster = this.createDBMonster(level, type);
        const monster = new Monster();
        monster.load(dbMonster);
        return monster;
    }

    public createDBMonster(level: number, type: MonsterType): DBMonster {
        const dbMonster = <DBMonster> {
            typeKey: type.key,
            level: level,
            isAlive: true,
            skills: type.skillTypes.map(skillType => {
                return <DBSkill> {
                    remainingCooldown: 0, 
                    typeKey: skillType.key
                }
            })
        };

        return dbMonster;
    }
}
