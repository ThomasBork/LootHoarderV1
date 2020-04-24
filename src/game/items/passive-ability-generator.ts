import { DBPassiveAbility } from "../../game-state/db-passive-ability";

export class PassiveAbilityGenerator {
    public generateDbAbility: (itemLevel: number) => DBPassiveAbility;

    public static create(options: {
        generateDbAbility: (itemLevel: number) => DBPassiveAbility
    }): PassiveAbilityGenerator {
        const generator = new PassiveAbilityGenerator();
        generator.generateDbAbility = options.generateDbAbility;
        return generator;
    }
}
