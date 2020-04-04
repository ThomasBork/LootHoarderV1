import { HeroType } from "./hero-type";

export class HeroTypeService {
    public warrior: HeroType;

    public allHeroTypes: HeroType[];

    public initialize () {
        this.warrior = HeroType.create({
            key: 'warrior',
            name: 'Warrior',
            description: 'Fights with brute force and no hesitation',
            imageName: 'warrior.png'
        });

        this.allHeroTypes = [
            this.warrior
        ];
    }

    public getByKey(key: string): HeroType {
        return this.allHeroTypes.find(type => type.key === key);
    }
}