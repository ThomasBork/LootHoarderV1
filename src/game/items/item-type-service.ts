import { ItemType } from "./item-type";
import { ItemCategory } from "./item-category";
import { GameServices } from "../game-services";

export class ItemTypeService {
    public broadSword: ItemType;
    public towerShield: ItemType;
    public wizardsHat: ItemType;

    public allItemTypes: ItemType[];

    public initialize(): void {
        this.broadSword = ItemType.create({
            key: 'broad-sword',
            imageName: 'broad-sword.png',
            name: 'Broad Sword',
            category: ItemCategory.weapon,
            implicitPassiveAbilityGenerators: [GameServices.passiveAbilityGenerators.increasedAttackDamage],
            possibleExplicitPassiveAbilityGenerators: [
                {weight: 500, value: GameServices.passiveAbilityGenerators.increasedArmor},
                {weight: 500, value: GameServices.passiveAbilityGenerators.increasedAttackDamage}
            ]
        });

        this.towerShield = ItemType.create({
            key: 'tower-shield',
            imageName: 'tower-shield.png',
            name: 'Tower Shield',
            category: ItemCategory.shield,
            implicitPassiveAbilityGenerators: [GameServices.passiveAbilityGenerators.increasedArmor],
            possibleExplicitPassiveAbilityGenerators: [
                {weight: 500, value: GameServices.passiveAbilityGenerators.increasedArmor},
                {weight: 500, value: GameServices.passiveAbilityGenerators.increasedAttackDamage}
            ]
        });

        this.wizardsHat = ItemType.create({
            key: 'wizards-hat',
            imageName: 'wizards-hat.png',
            name: "Wizard's Hat",
            category: ItemCategory.head,
            implicitPassiveAbilityGenerators: [GameServices.passiveAbilityGenerators.increasedAttackDamage],
            possibleExplicitPassiveAbilityGenerators: [
                {weight: 500, value: GameServices.passiveAbilityGenerators.increasedAttackDamage}
            ]
        });

        this.allItemTypes = [
            this.broadSword,
            this.towerShield,
            this.wizardsHat
        ];
    }

    public getByKey(key: string): ItemType {
        return this.allItemTypes.find(type => type.key === key);
    }
}
