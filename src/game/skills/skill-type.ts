import { SkillEffect } from "./skill-effect";

export class SkillType {
    public key: string;
    public name: string;
    public description: string;
    public cooldown: number;
    public energyCost: number;
    public requiresTarget: boolean;
    public effect: SkillEffect;

    public static create (options: {
        key: string,
        name: string,
        description: string,
        cooldown: number,
        energyCost: number,
        requiresTarget: boolean,
        effect: SkillEffect
    }): SkillType {
        const skillType = new SkillType();
        skillType.key = options.key;
        skillType.name = options.name;
        skillType.description = options.description;
        skillType.cooldown = options.cooldown;
        skillType.energyCost = options.energyCost;
        skillType.requiresTarget = options.requiresTarget;
        skillType.effect = options.effect;
        return skillType;
    }
}
