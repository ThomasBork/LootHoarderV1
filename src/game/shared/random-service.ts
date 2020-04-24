import { WeightedValue } from "./weighted-value";

export class RandomService {
    public getWeightedValue <T>(weightedValues: WeightedValue<T>[]): T {
        const weightSum = weightedValues.map(wv => wv.weight).reduce((prev, cur) => prev + cur);
        let result = Math.random() * weightSum;
        for(let wv of weightedValues) {
            if (result <= wv.weight) {
                return wv.value;
            } else {
                result -= wv.weight;
            }
        }
    }

    public getRandomElement <T>(array: T[]): T {
        const index = this.randomInteger(0, array.length - 1);
        return array[index];
    }

    public rollSuccess (successChance: number): boolean {
        return Math.random() < successChance;
    }

    public randomInteger (min: number, max: number): number {
        const rolledValue = Math.random() * (max - min + 1) + min;
        const roundedRolledValue = Math.floor(rolledValue);
        return roundedRolledValue;
    }

    public randomDecimal (min: number, max: number): number {
        const rolledValue = Math.random() * (max - min) + min;
        return rolledValue;
    }
}
