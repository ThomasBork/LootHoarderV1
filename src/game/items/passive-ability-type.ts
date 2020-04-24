import { PassiveAbilityArgumentType } from "./passive-ability-argument-type";
import { PassiveAbility } from "./passive-ability";
import { Character } from "../arenas/character";

export class PassiveAbilityType {
    public key: string;
    public argumentTypes: { [keys: string]: PassiveAbilityArgumentType };
    public getDescription: (ability: PassiveAbility) => string;
    public applyEffect: (ability: PassiveAbility, owner: Character) => void;
    public removeEffect: (ability: PassiveAbility, owner: Character) => void;

    public static create(options: {
        key: string,
        argumentTypes: { [keys: string]: PassiveAbilityArgumentType },
        getDescription: (ability: PassiveAbility) => string,
        applyEffect: (ability: PassiveAbility, owner: Character) => void,
        removeEffect: (ability: PassiveAbility, owner: Character) => void
    }): PassiveAbilityType {
        const abilityType = new PassiveAbilityType();
        abilityType.key = options.key;
        abilityType.argumentTypes = options.argumentTypes;
        abilityType.getDescription = options.getDescription;
        abilityType.applyEffect = options.applyEffect;
        abilityType.removeEffect = options.removeEffect;
        return abilityType;
    }
}
