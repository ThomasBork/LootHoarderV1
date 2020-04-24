export class HeroService {
    public getAmountOfExperienceRequiredToAdvanceFromLevel(level: number): number {
        return level * 100;
    }
}