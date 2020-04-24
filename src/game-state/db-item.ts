import { DBPassiveAbility } from "./db-passive-ability";

export interface DBItem {
    id: number;
    typeKey: string;
    level: number;
    implicitPassiveAbilities: DBPassiveAbility[];
    explicitPassiveAbilities: DBPassiveAbility[];
}