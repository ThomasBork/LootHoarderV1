export class HeroType {
    public key: string;
    public name: string;
    public description: string;
    public imageName: string;

    public static create (options: {
        key: string,
        name: string,
        description: string,
        imageName: string
    }): HeroType {
        const heroType = new HeroType();
        heroType.key = options.key;
        heroType.name = options.name;
        heroType.description = options.description;
        heroType.imageName = options.imageName;
        return heroType;
    }
}