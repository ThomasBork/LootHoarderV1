import { PassiveAbilityArguments } from "../game/items/passive-ability-arguments";

export interface DBPassiveAbility {
    typeKey: string;
    args: PassiveAbilityArguments;
}