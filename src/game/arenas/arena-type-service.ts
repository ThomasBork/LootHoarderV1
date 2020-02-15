import { ArenaType } from './arena-type';
import { DBMonster } from '../../game-state/db-monster';
import { ArenaRoom } from './arena-room';
import { MonsterType } from '../monsters/monster-type';
import { DBArenaRoom } from '../../game-state/db-arena-room';
import { WeightedValue } from '../shared/weighted-value';
import { GameServices } from '../game-services';

export class ArenaTypeService {
    public allArenaTypes: ArenaType[];
    public initialize (): void {
        this.allArenaTypes = <ArenaType[]>[
             {
                key: 'forest',
                name: 'Forest',
                description: 'Easy monsters!',
                imageName: 'forest.png',
                position: {x: 0, y: 0},
                spawnRooms: (level: number) => {
                    return this.spawnRooms({
                        level: level,
                        amountOfRooms: 10,
                        amountOfMonstersInEachRoom: 5,
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
            },
            {
                ke: 'brushlands',
                name: 'Brushlands',
                description: 'Also easy monsters!',
                imageName: 'brushlands.png',
                position: {x: 1, y: 0},
                spawnRooms: (level: number) => {
                    return this.spawnRooms({
                        level: level,
                        amountOfRooms: 10,
                        amountOfMonstersInEachRoom: 5,
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
            }
        ];
    }

    public getByKey(key: string): ArenaType {
        return this.allArenaTypes.find(type => type.key === key);
    }

    private spawnRooms(settings: {
        level: number,
        amountOfRooms: number,
        amountOfMonstersInEachRoom: number,
        monsterTypes: WeightedValue<MonsterType>[]
    }): ArenaRoom[] {
        const arenaRooms: ArenaRoom[] = [];
        for (let currentRoomIndex = 0; currentRoomIndex<settings.amountOfRooms; currentRoomIndex++) {
            const dbMonsters: DBMonster[] = [];
            for (let currentMonsterIndex = 0; currentMonsterIndex < settings.amountOfMonstersInEachRoom; currentMonsterIndex++) {
                const monsterType = GameServices.random.getWeightedValue(settings.monsterTypes);
                const dbMonster = GameServices.monsters.createDBMonster(settings.level, monsterType);
                dbMonsters.push(dbMonster);
            }
            const dbArenaRoom = <DBArenaRoom> {
                currentMonsterIndex: 0,
                heroIds: [],
                monsters: dbMonsters
            };
            const arenaRoom = new ArenaRoom();
            arenaRoom.load(dbArenaRoom);
            arenaRooms.push(arenaRoom);
        }
        return arenaRooms;
    }
}
