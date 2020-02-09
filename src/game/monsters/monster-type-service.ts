import { MonsterType } from "./monster-type";
import { Attributes } from "../attributes/attributes";
import { GameServices } from "../game-services";

export class MonsterTypeService {
    public wolf: MonsterType;
    public snake: MonsterType;

    public allMonsterTypes: MonsterType[];

    public initialize () {
        this.wolf = <MonsterType> {
            key: 'wolf',
            name: 'Wolf',
            description: 'A mighty wolf',
            imageName: 'wolf.png',
            attributesBase: Attributes.create({
                attackDamage: 10,
                attackSpeed: 1.0,
                armor: 10,
                maximumHealth: 300
            }),
            attributesPerLevel: Attributes.create({
                attackDamage: 1,
                armor: 0.4,
                maximumHealth: 20
            }),
            skillTypes: [GameServices.skillTypes.basicAttack]
        };

        this.snake = <MonsterType> {
            key: 'snake',
            name: 'Snake',
            description: 'A cunning snake',
            imageName: 'snake.png',
            attributesBase: Attributes.create({
                attackDamage: 15,
                attackSpeed: 2.0,
                maximumHealth: 200
            }),
            attributesPerLevel: Attributes.create({
                attackDamage: 2,
                maximumHealth: 12
            }),
            skillTypes: [GameServices.skillTypes.basicAttack]
        };
    }

    public getByKey(key: string): MonsterType {
        return this.allMonsterTypes.find(type => type.key === key);
    }
}