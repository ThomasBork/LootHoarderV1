import { DBSkill } from "../../game-state/db-skill";
import { SkillType } from "./skill-type";
import { GameServices } from "../game-services";

export class Skill {
    public dbModel: DBSkill;
    public type: SkillType;

    public load (dbModel: DBSkill): void {
        this.dbModel = dbModel;
        this.type = GameServices.skillTypes.getByKey(this.dbModel.typeKey);
    }
}