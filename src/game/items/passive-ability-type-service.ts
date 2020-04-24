import { PassiveAbilityType } from "./passive-ability-type";
import { PassiveAbility } from "./passive-ability";
import { PassiveAbilityArgumentType } from "./passive-ability-argument-type";
import { GameServices } from "../game-services";
import { Character } from "../arenas/character";

export class PassiveAbilityTypeService {
    public allPassiveAbilityTypes: PassiveAbilityType[];

    public increasedAttackDamage: PassiveAbilityType;
    public increasedArmor: PassiveAbilityType;

    public initialize () {
        this.increasedAttackDamage = PassiveAbilityType.create({
            key: 'increased-attack-damage',
            argumentTypes: {
                'attack-damage': PassiveAbilityArgumentType.integer
            },
            getDescription: (ability: PassiveAbility) => {
                return `Increases attack damage by ${this.printArgument(ability, 'attack-damage')}`;
            },
            applyEffect: (ability: PassiveAbility, owner: Character) => {
                const increase = ability.args['attack-damage'];
                owner.attributes.attackDamage.setAdditiveModifier(ability, increase);
            },
            removeEffect: (ability: PassiveAbility, owner: Character) => {
                owner.attributes.attackDamage.removeAllModifiers(ability);
            }
        });

        this.increasedArmor = PassiveAbilityType.create({
            key: 'increased-armor',
            argumentTypes: {
                'armor': PassiveAbilityArgumentType.integer
            },
            getDescription: (ability: PassiveAbility) => {
                return `Increases armor by ${this.printArgument(ability, 'armor')}`;
            },
            applyEffect: (ability: PassiveAbility, owner: Character) => {
                const increase = ability.args['armor'];
                owner.attributes.armor.setAdditiveModifier(ability, increase);
            },
            removeEffect: (ability: PassiveAbility, owner: Character) => {
                owner.attributes.armor.removeAllModifiers(ability);
            }
        });

        this.allPassiveAbilityTypes = [
            this.increasedAttackDamage,
            this.increasedArmor
        ];
    }

    private printArgument(ability: PassiveAbility, argumentKey: string): string {
        const argumentType = ability.type.argumentTypes[argumentKey];
        const argumentValue = ability.args[argumentKey];
        switch(argumentType) {
            case PassiveAbilityArgumentType.decimal:
                return GameServices.numberFormatting.formatDecimal(argumentValue as number);
            case PassiveAbilityArgumentType.integer:
                return GameServices.numberFormatting.formatInteger(argumentValue as number);
            case PassiveAbilityArgumentType.percentage:
                const argumentValueAsPercent = (argumentValue as number) * 100;
                return GameServices.numberFormatting.formatDecimal(argumentValueAsPercent);
            default:
                throw new Error('Unknown argument type: ' + argumentType);
        }
    }

    public getByKey(key: string): PassiveAbilityType {
        return this.allPassiveAbilityTypes.find(type => type.key === key);
    }
}
