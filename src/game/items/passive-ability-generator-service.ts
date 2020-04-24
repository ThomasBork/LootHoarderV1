import { PassiveAbilityGenerator } from "./passive-ability-generator";
import { DBPassiveAbility } from "../../game-state/db-passive-ability";
import { PassiveAbilityType } from "./passive-ability-type";
import { GameServices } from "../game-services";
import { PassiveAbilityArguments } from "./passive-ability-arguments";

export class PassiveAbilityGeneratorService {
    public increasedArmor: PassiveAbilityGenerator;
    public increasedAttackDamage: PassiveAbilityGenerator;
    public initialize(): void {
        this.increasedArmor = this.createGeneratorWithSingleIntegerArgument({
            abilityType: GameServices.passiveAbilityTypes.increasedArmor,
            argumentKey: 'armor',
            min: 2,
            max: 6
        });

        this.increasedAttackDamage = this.createGeneratorWithSingleIntegerArgument({
            abilityType: GameServices.passiveAbilityTypes.increasedAttackDamage,
            argumentKey: 'attack-damage',
            min: 5,
            max: 10
        });
    }

    private createGeneratorWithSingleIntegerArgument (options: { 
        abilityType: PassiveAbilityType, 
        argumentKey: string, 
        min: number, 
        max: number
    }): PassiveAbilityGenerator {
        return PassiveAbilityGenerator.create({
            generateDbAbility: (itemLevel) => {
                const actualMin = options.min + itemLevel;
                const actualMax = options.max + itemLevel;
                const actual = GameServices.random.randomInteger(actualMin, actualMax);
                const args: PassiveAbilityArguments = {};
                args[options.argumentKey] = actual;

                return <DBPassiveAbility> {
                    typeKey: options.abilityType.key,
                    args: args
                };
            }
        });
    }
}
