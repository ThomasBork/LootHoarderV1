import { DBItem } from "../../game-state/db-item";
import { PassiveAbility } from "./passive-ability";
import { ItemType } from "./item-type";
import { GameServices } from "../game-services";

export class Item {
    public dbModel: DBItem;
    public type: ItemType;
    public implicitPassiveAbilities: PassiveAbility[];
    public explicitPassiveAbilities: PassiveAbility[];

    public get level(): number { return this.dbModel.level; }

    public static load (dbModel: DBItem): Item {
        const newItem = new Item();
        newItem.dbModel = dbModel;
        newItem.type = GameServices.itemTypes.getByKey(dbModel.typeKey);
        newItem.implicitPassiveAbilities = dbModel.implicitPassiveAbilities.map(PassiveAbility.load);
        newItem.explicitPassiveAbilities = dbModel.explicitPassiveAbilities.map(PassiveAbility.load);
        return newItem;
    }
}