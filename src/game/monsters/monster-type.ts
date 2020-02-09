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
}
