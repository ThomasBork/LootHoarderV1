import { PassiveAbilityType } from "./passive-ability-type";
import { DBPassiveAbility } from "../../game-state/db-passive-ability";
import { GameServices } from "../game-services";

export class PassiveAbility {
    public dbModel: DBPassiveAbility;
    public type: PassiveAbilityType;
    public get args () {
        return this.dbModel.args;
    }

    public static load(dbModel: DBPassiveAbility): PassiveAbility {
        const passiveAbility = new PassiveAbility();
        passiveAbility.dbModel = dbModel;
        passiveAbility.type = GameServices.passiveAbilityTypes.getByKey(dbModel.typeKey);
        return passiveAbility;
    }
}