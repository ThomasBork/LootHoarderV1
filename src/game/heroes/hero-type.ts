import { Attributes } from "../attributes/attributes";

export class HeroType {
    public key: string;
    public name: string;
    public description: string;
    public imageName: string;
    public attributesBase: Attributes;
    public attributesPerLevel: Attributes;

    public static create (options: {
        key: string,
        name: string,
        description: string,
        imageName: string,
        attributesBase: Attributes,
        attributesPerLevel: Attributes
    }): HeroType {
        const heroType = new HeroType();
        heroType.key = options.key;
        heroType.name = options.name;
        heroType.description = options.description;
        heroType.imageName = options.imageName;
        heroType.attributesBase = options.attributesBase;
        heroType.attributesPerLevel = options.attributesPerLevel;
        return heroType;
    }
}
