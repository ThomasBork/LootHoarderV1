import { ObservableWith1Argument, ObservableFactory } from "../../common/observable";
import { NumberChangeEvent } from "./value-container-change";

class ValueModifier {
    public amount: number;
    public key: any;

    constructor (key: any, amount: number) {
        this.amount = amount;
        this.key = key;
    }
}

export class ValueContainer {
    private additiveModifiers: ValueModifier[] = [];
    private additiveValueContainers: ValueContainer[] = [];
    private multiplicativeModifiers: ValueModifier[] = [];
    private multiplicativeValueContainers: ValueContainer[] = [];
    public value = 0;
    public onValueChange: ObservableWith1Argument<NumberChangeEvent> = ObservableFactory.createWith1Argument<NumberChangeEvent>();
    public constructor (baseValue?: number) {
        if (baseValue !== undefined) {
            this.setAdditiveModifier(this, baseValue);
        }
    }
    public recalculateValue (): void {
        let newValue = 0;
        this.additiveModifiers.forEach(mod => newValue += mod.amount);
        this.multiplicativeModifiers.forEach(mod => newValue *= mod.amount);
        if (this.value !== newValue) {
            const valueChange = <NumberChangeEvent> {
                previousValue: this.value,
                newValue: newValue
            };
            this.value = newValue;
            this.onValueChange.notify(valueChange);
        }
    }
    public setAdditiveModifier (key: any, amount: number) {
        const existingModifier = this.additiveModifiers.find(mod => mod.key === key);
        if (existingModifier) {
            existingModifier.amount = amount;
        } else {
            const newModifier = new ValueModifier(key, amount);
            this.additiveModifiers.push(newModifier);
        }
        this.recalculateValue();
    }
    public setAdditiveValueContainer (valueContainer: ValueContainer) {
        const exists = this.additiveValueContainers.includes(valueContainer);
        if (!exists) {
            this.additiveValueContainers.push(valueContainer);
            this.setAdditiveModifier(valueContainer, valueContainer.value);
            this.recalculateValue();
            valueContainer.onValueChange.addSubscription(
                this, 
                valueChange => {
                    this.setAdditiveModifier(valueContainer, valueChange.newValue);
                    this.recalculateValue();
                }
            );
        }
    }
    public setMultiplicativeModifier (key: any, amount: number) {
        const existingModifier = this.multiplicativeModifiers.find(mod => mod.key === key);
        if (existingModifier) {
            existingModifier.amount = amount;
        } else {
            const newModifier = new ValueModifier(key, amount);
            this.multiplicativeModifiers.push(newModifier);
        }
        this.recalculateValue();
    }
    public setMultiplicativeValueContainer (valueContainer: ValueContainer) {
        const exists = this.multiplicativeValueContainers.includes(valueContainer);
        if (!exists) {
            this.multiplicativeValueContainers.push(valueContainer);

            this.setMultiplicativeModifier(valueContainer, valueContainer.value);
            this.recalculateValue();
            valueContainer.onValueChange.addSubscription(
                this, 
                valueChange => {
                    this.setMultiplicativeModifier(valueContainer, valueChange.newValue);
                    this.recalculateValue();
                }
            );
        }
    }
    public removeAllModifiers (key: any): void {
        this.additiveModifiers = this.additiveModifiers.filter(mod => mod.key !== key);
        this.additiveValueContainers = this.additiveValueContainers.filter(vc => vc !== key);
        this.multiplicativeModifiers = this.multiplicativeModifiers.filter(mod => mod.key !== key);
        this.multiplicativeValueContainers = this.multiplicativeValueContainers.filter(vc => vc !== key);
    }
}
