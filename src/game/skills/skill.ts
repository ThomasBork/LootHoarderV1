import { DBSkill } from "../../game-state/db-skill";
import { SkillType } from "./skill-type";
import { GameServices } from "../game-services";
import { ObservableWith1Argument, ObservableFactory } from "../../common/observable";
import { NumberChangeEvent } from "../shared/value-container-change";
import { ValueContainer } from "../shared/value-container";

export class Skill {
    public dbModel: DBSkill;
    public type: SkillType;
    public cooldown: ValueContainer = new ValueContainer();
    
    public onCooldownChanged: ObservableWith1Argument<NumberChangeEvent> = ObservableFactory.createWith1Argument<NumberChangeEvent>();

    public get remainingCooldown(): number { return this.dbModel.remainingCooldown; }
    public get isReady(): boolean {return this.dbModel.remainingCooldown === 0;}

    public static load (dbModel: DBSkill): Skill {
        const skill = new Skill();
        skill.dbModel = dbModel;
        skill.type = GameServices.skillTypes.getByKey(skill.dbModel.typeKey);
        skill.cooldown.setAdditiveModifier(skill.type, skill.type.cooldown);
        return skill;
    }

    public resetCooldown(): void {
        const previousRemainingCooldown = this.dbModel.remainingCooldown;
        const newReminingCooldown = this.cooldown.value;
        this.dbModel.remainingCooldown = newReminingCooldown;
        this.onCooldownChanged.notify({
            previousValue: previousRemainingCooldown,
            newValue: newReminingCooldown
        });
    }

    public reduceCooldown(time: number): void {
        const previousRemainingCooldown = this.dbModel.remainingCooldown;
        let newReminingCooldown = previousRemainingCooldown - time;
        if (newReminingCooldown <= 0) {
            newReminingCooldown = 0;
        }
        if (previousRemainingCooldown !== newReminingCooldown) {
            this.dbModel.remainingCooldown = newReminingCooldown;
            this.onCooldownChanged.notify({
                previousValue: previousRemainingCooldown,
                newValue: newReminingCooldown
            });
        }
    }
}