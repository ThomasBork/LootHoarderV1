import { DBSkill } from "./db-skill";
import { DBItem } from "./db-item";
import { KeyValuePair } from "../game/shared/key-value-pair";
import { ItemBodyLocation } from "../game/items/item-body-location";

export interface DBHero {
    id: number;
    typeKey: string;
    name: string;
    level: number;
    experience: number;
    currentHealth: number;
    isAlive: boolean;
    skills: DBSkill[];
    items: KeyValuePair<ItemBodyLocation, DBItem>[];
}
