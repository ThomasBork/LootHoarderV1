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

    public rollSuccess (successChance: number): boolean {
        return Math.random() < successChance;
    }
}
