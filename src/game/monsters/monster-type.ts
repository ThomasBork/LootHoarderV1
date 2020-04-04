import { Attributes } from "../attributes/attributes";
import { SkillType } from "../skills/skill-type";

export class MonsterType {
    public key: string;
    public name: string;
    public description: string;
    public imageName: string;
    public attributesBase: Attributes;
    public attributesPerLevel: Attributes;
    public skillTypes: SkillType[];

    public static create (options: {
        key: string,
        name: string,
        description: string,
        imageName: string,
        attributesBase: Attributes,
        attributesPerLevel: Attributes,
        skillTypes: SkillType[]
    }): MonsterType {
        const monsterType = new MonsterType();
        monsterType.key = options.key;
        monsterType.name = options.name;
        monsterType.description = options.description;
        monsterType.imageName = options.imageName;
        monsterType.attributesBase = options.attributesBase;
        monsterType.attributesPerLevel = options.attributesPerLevel;
        monsterType.skillTypes = options.skillTypes;
        return monsterType;
    }
}
