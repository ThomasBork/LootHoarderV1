import { ItemCategory } from "./item-category";
import { PassiveAbilityGenerator } from "./passive-ability-generator";
import { WeightedValue } from "../shared/weighted-value";

export class ItemType {
    public key: string;
    public name: string;
    public imageName: string;
    public category: ItemCategory;
    public implicitPassiveAbilityGenerators: PassiveAbilityGenerator[];
    public possibleExplicitPassiveAbilityGenerators: WeightedValue<PassiveAbilityGenerator>[];

    public static create (options: {
        key: string,
        name: string,
        imageName: string,
        category: ItemCategory,
        implicitPassiveAbilityGenerators: PassiveAbilityGenerator[],
        possibleExplicitPassiveAbilityGenerators: WeightedValue<PassiveAbilityGenerator>[]
    }): ItemType {
        const itemType = new ItemType();
        itemType.key = options.key;
        itemType.name = options.name;
        itemType.imageName = options.imageName;
        itemType.category = options.category;
        itemType.implicitPassiveAbilityGenerators = options.implicitPassiveAbilityGenerators;
        itemType.possibleExplicitPassiveAbilityGenerators = options.possibleExplicitPassiveAbilityGenerators;
        return itemType;
    }
}