import { SkillType } from "./skill-type";
import { Character } from "../arenas/character";
import { ArenaRoom } from "../arenas/arena-room";
import { GameServices } from "../game-services";

export class SkillTypeService {
    public basicAttack: SkillType;
    public initialize() {
        this.basicAttack = <SkillType> {
            key: "basic-attack",
            cooldown: 1000,
            energyCost: 0,
            effect: (user: Character, arenaRoom: ArenaRoom) => {
                let damage = user.attributes.attackDamage.value;
                const isCriticalStrike = GameServices.random.rollSuccess(user.attributes.attackCriticalMultiplier.value);
                if (isCriticalStrike) {
                    damage *= user.attributes.attackCriticalMultiplier.value;
                }

                this.dealDamage(arenaRoom.currentMonster, damage);
            }
        };
    }

    private dealDamage(damageReceiver: Character, damage: number): void {
        const damageReceived = this.reduceDamageBasedOnArmor(damage, damageReceiver.attributes.armor.value);
        damageReceiver.currentHealth -= damageReceived;
    }

    private reduceDamageBasedOnArmor(damage: number, armor: number): number {
        return damage * 100/(100 + armor);
    }
}
