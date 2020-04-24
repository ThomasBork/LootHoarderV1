import { DamageType } from "../skills/damage-type";

export interface DamageTakenEvent {
    amount: number,
    type: DamageType
}
