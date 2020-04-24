import { ArenaType } from './arena-type';
import { DBMonster } from '../../game-state/db-monster';
import { MonsterType } from '../monsters/monster-type';
import { DBArenaRoom } from '../../game-state/db-arena-room';
import { WeightedValue } from '../shared/weighted-value';
import { GameServices } from '../game-services';
import { DBArenaRoomEncounter } from '../../game-state/db-arena-room-encounter';

export class ArenaTypeService {
    public allArenaTypes: ArenaType[];
    public initialize (): void {
        this.allArenaTypes = [
             ArenaType.create({
                key: 'forest',
                name: 'Forest',
                description: 'Easy monsters!',
                imageName: 'forest.png',
                position: {x: 0, y: 0},
                level: 1,
                createDbRooms: (level: number) => {
                    return this.createDbRooms({
                        level: level,
                        amountOfRooms: 10,
                        amountOfEncountersInEachRoom: 5,
                        amountOfMonstersInEachEncounter: 2,
                        monsterTypes: [
                            {
                                weight: 20,
                                value: GameServices.monsterTypes.wolf
                            },
                            {
                                weight: 10,
                                value: GameServices.monsterTypes.snake
                            }
                        ]
                    });
                }
            }),
            ArenaType.create({
                key: 'brushlands',
                name: 'Brushlands',
                description: 'Also easy monsters!',
                imageName: 'brushlands.png',
                position: {x: 1, y: 0},
                level: 5,
                createDbRooms: (level: number) => {
                    return this.createDbRooms({
                        level: level,
                        amountOfRooms: 10,
                        amountOfEncountersInEachRoom: 5,
                        amountOfMonstersInEachEncounter: 2,
                        monsterTypes: [
                            {
                                weight: 20,
                                value: GameServices.monsterTypes.wolf
                            },
                            {
                                weight: 10,
                                value: GameServices.monsterTypes.snake
                            }
                        ]
                    });
                }
            })
        ];
    }

    public getByKey(key: string): ArenaType {
        return this.allArenaTypes.find(type => type.key === key);
    }

    private createDbRooms(settings: {
        level: number,
        amountOfRooms: number,
        amountOfEncountersInEachRoom: number,
        amountOfMonstersInEachEncounter: number,
        monsterTypes: WeightedValue<MonsterType>[]
    }): DBArenaRoom[] {
        const dbArenaRooms: DBArenaRoom[] = [];
        for (let currentRoomIndex = 0; currentRoomIndex<settings.amountOfRooms; currentRoomIndex++) {
            const dbEncounters: DBArenaRoomEncounter[] = [];
            for (let currentEncounterIndex = 0; currentEncounterIndex < settings.amountOfEncountersInEachRoom; currentEncounterIndex++) {
                const dbMonsters: DBMonster[] = [];
                for (let currentMonsterIndex = 0; currentMonsterIndex < settings.amountOfMonstersInEachEncounter; currentMonsterIndex++) {
                    const monsterType = GameServices.random.getWeightedValue(settings.monsterTypes);
                    const dbMonster = GameServices.monsters.createDBMonster(settings.level, monsterType);
                    dbMonsters.push(dbMonster);
                }
                const dbEncounter = <DBArenaRoomEncounter> {
                    monsters: dbMonsters
                };
                dbEncounters.push(dbEncounter);
            }
            const dbArenaRoom = <DBArenaRoom> {
                currentEncounterIndex: 0,
                heroIds: [],
                encounters: dbEncounters
            };
            dbArenaRooms.push(dbArenaRoom);
        }
        return dbArenaRooms;
    }
}
