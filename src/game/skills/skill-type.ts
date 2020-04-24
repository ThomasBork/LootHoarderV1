import { SkillEffect } from "./skill-effect";
import { SkillTag } from "./skill-tag";
import { Character } from "../arenas/character";
import { Skill } from "./skill";

export class SkillType {
    public key: string;
    public name: string;
    public description: string;
    public imageName: string;
    public cooldown: number;
    public energyCost: number;
    public canTargetEnemy: boolean;
    public canTargetFriend: boolean;
    public tags: SkillTag[];
    public effect: SkillEffect;
    public setUpValueContainers: (character: Character, skill: Skill) => void;
    
    public get requiresTarget(): boolean { return this.canTargetEnemy || this.canTargetFriend; }
    
    public static create (options: {
        key: string,
        name: string,
        description: string,
        imageName: string,
        cooldown: number,
        energyCost: number,
        canTargetEnemy: boolean,
        canTargetFriend: boolean,
        tags: SkillTag[],
        effect: SkillEffect,
        setUpValueContainers: (character: Character, skill: Skill) => void
    }): SkillType {
        const skillType = new SkillType();
        skillType.key = options.key;
        skillType.name = options.name;
        skillType.description = options.description;
        skillType.imageName = options.imageName;
        skillType.cooldown = options.cooldown;
        skillType.energyCost = options.energyCost;
        skillType.canTargetEnemy = options.canTargetEnemy;
        skillType.canTargetFriend = options.canTargetFriend;
        skillType.tags = options.tags;
        skillType.effect = options.effect;
        skillType.setUpValueContainers = options.setUpValueContainers;
        return skillType;
    }
}
