import { SkillType } from "./skill-type";
import { Character } from "../arenas/character";
import { ArenaRoom } from "../arenas/arena-room";
import { GameServices } from "../game-services";
import { DamageType } from "./damage-type";
import { SkillTag } from "./skill-tag";
import { ValueContainer } from "../shared/value-container";

export class SkillTypeService {
    public basicAttack: SkillType;
    public allSkillTypes: SkillType[];
    public initialize() {
        this.basicAttack = SkillType.create({
            key: "basic-attack",
            name: 'Attack',
            description: 'Deals physical damage to a single enemy',
            imageName: 'basic-attack.png',
            cooldown: 1000,
            energyCost: 0,
            canTargetEnemy: true,
            canTargetFriend: false,
            tags: [SkillTag.attack],
            effect: (user: Character, target: Character, arenaRoom: ArenaRoom) => {
                let damage = user.attributes.attackDamage.value;
                const isCriticalStrike = GameServices.random.rollSuccess(user.attributes.attackCriticalMultiplier.value);
                if (isCriticalStrike) {
                    damage *= user.attributes.attackCriticalMultiplier.value;
                }

                this.dealDamage(target, damage, DamageType.physical);
            },
            setUpValueContainers: (character, skill) => {
                const attackSpeedMultiplier = new ValueContainer();
                attackSpeedMultiplier.setAdditiveValueContainer(character.attributes.attackSpeed);
                skill.cooldown.setMultiplicativeModifier(attackSpeedMultiplier, 1 / attackSpeedMultiplier.value);
                attackSpeedMultiplier.onValueChange.addSubscription(
                    attackSpeedMultiplier, 
                    event => skill.cooldown.setMultiplicativeModifier(attackSpeedMultiplier, 1 / event.newValue)
                );
                skill.cooldown.setMultiplicativeValueContainer(attackSpeedMultiplier);
            }
        });

        this.allSkillTypes = [
            this.basicAttack
        ];
    }

    public getByKey(key: string): SkillType {
        return this.allSkillTypes.find(type => type.key === key);
    }

    private dealDamage(damageReceiver: Character, damage: number, damageType: DamageType): void {
        switch(damageType) {
            case DamageType.physical: {
                const damageReceived = this.reduceDamageBasedOnArmor(damage, damageReceiver.attributes.armor.value);
                damageReceiver.takeDamage(damageReceived, damageType);
                break;
            }
            case DamageType.magic: {
                const damageReceived = this.reduceDamageBasedOnMagicResistance(damage, damageReceiver.attributes.magicResistance.value);
                damageReceiver.takeDamage(damageReceived, damageType);
                break;
            }
            default:
                throw { message: 'Unknown damage type: ' + damageType };
        }
    }

    private reduceDamageBasedOnArmor(damage: number, armor: number): number {
        return damage * 100/(100 + armor);
    }
    private reduceDamageBasedOnMagicResistance(damage: number, magicResistance: number): number {
        return damage * 100/(100 + magicResistance);
    }
}
