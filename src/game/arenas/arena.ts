import { DBArena } from "../../game-state/db-arena";
import { ArenaRoom } from "./arena-room";
import { ArenaType } from "./arena-type";
import { GameServices } from "../game-services";
import { Character } from "./character";
import { Skill } from "../skills/skill";
import { WeightedValue } from "../shared/weighted-value";
import { SkillType } from "../skills/skill-type";
import { Hero } from "../heroes/hero";
import { Observable, ObservableFactory } from "../../common/observable";

export class Arena {
    public dbModel: DBArena;
    public type: ArenaType;
    public rooms: ArenaRoom[];

    public onPlayerLose: Observable = ObservableFactory.create();

    public get currentRoom(): ArenaRoom { return this.rooms[this.dbModel.currentRoomIndex]; }
    public get currentRoomIndex(): number { return this.dbModel.currentRoomIndex; }
    public get level(): number { return this.dbModel.level; }
    public get hasPlayerLost(): boolean { return this.currentRoom.hasPlayerLost; }

    public static load (dbArena: DBArena): Arena {
        const arena = new Arena();
        arena.dbModel = dbArena;

        arena.type = GameServices.arenaTypes.getByKey(dbArena.typeKey);

        arena.rooms = dbArena.rooms.map(ArenaRoom.load);
        return arena;
    }

    public update(dTime: number): void {
        if (!this.hasPlayerLost) {
            this.currentRoom.heroes.forEach(hero => {
                hero.skills.forEach(skill => skill.reduceCooldown(dTime));
            });
    
            this.currentRoom.currentEncounter.monsters.forEach(monster => {
                if (monster.isAlive && !this.hasPlayerLost) {
                    // Update cooldowns
                    monster.skills.forEach(skill => skill.reduceCooldown(dTime));
        
                    // Find and use a ready skill if possible
                    const readySkills = monster.skills.filter(skill => skill.isReady);
                    if (readySkills.length > 0) {
                        const weightedReadySkills = readySkills.map(skill => {
                            const weightedSkillType = monster.type.skillTypes.find(wSkillType => wSkillType.value === skill.type);
                            return <WeightedValue<Skill>> {
                                weight: weightedSkillType.weight,
                                value: skill
                            };
                        });
            
                        const skillToUse = GameServices.random.getWeightedValue(weightedReadySkills);
                        const legalTargets = this.getLegalTargets(monster, skillToUse.type);
                        if (skillToUse.type.requiresTarget) {
                            if (legalTargets.length > 0) {
                                const target = GameServices.random.getRandomElement(legalTargets);
                                this.useSkill(monster, target, skillToUse);
                            }
                        } else {
                            this.useSkill(monster, null, skillToUse);
                        }
                    }
                }
            });
        }
    }

    public getLegalTargets(user: Character, skillType: SkillType): Character[] {
        const legalTargets = [];
        const isHero = user instanceof Hero;
        const heroes = this.currentRoom.heroes.filter(hero => hero.isAlive);
        const monsters = this.currentRoom.currentEncounter.monsters.filter(monster => monster.isAlive);
        const friends = isHero ? heroes : monsters;
        const enemies = isHero ? monsters : heroes;

        if (skillType.canTargetEnemy) {
            legalTargets.push(...enemies);
        }
        if (skillType.canTargetFriend) {
            legalTargets.push(...friends);
        }
        
        return legalTargets;
    }

    public useSkill(user: Character, target: Character, skill: Skill): void {
        if (skill.remainingCooldown === 0) {
            if (!this.hasPlayerLost) {
                skill.type.effect(user, target, this.currentRoom);
                skill.resetCooldown();
                if (this.hasPlayerLost) {
                    this.onPlayerLose.notify();
                }
            }
        } else {
            throw new Error("Can't use " + skill.type.name + " because it is not ready.");
        }
    }
}
