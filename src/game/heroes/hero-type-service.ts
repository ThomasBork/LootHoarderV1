import { HeroType } from "./hero-type";
import { Attributes } from "../attributes/attributes";

export class HeroTypeService {
    public warrior: HeroType;

    public allHeroTypes: HeroType[];

    public initialize () {
        this.warrior = HeroType.create({
            key: 'warrior',
            name: 'Warrior',
            description: 'Fights with brute force and no hesitation',
            imageName: 'warrior.png',
            attributesBase: Attributes.create({
                attackDamage: 16,
                attackSpeed: 0.8,
                maximumHealth: 50
            }),
            attributesPerLevel: Attributes.create({
                attackDamage: 2,
                maximumHealth: 50
            })
        });

        this.allHeroTypes = [
            this.warrior
        ];
    }

    public getByKey(key: string): HeroType {
        return this.allHeroTypes.find(type => type.key === key);
    }
}