import { Attribute } from "./attribute";
import { ValueContainer } from "../shared/value-container";
import { AttributeType } from "./attribute-type";
import { GameServices } from "../game-services";

export class Attributes {
    public attackSpeed: ValueContainer;
    public attackDamage: ValueContainer;
    public attackCriticalChance: ValueContainer;
    public attackCriticalMultiplier: ValueContainer;
    public armor: ValueContainer;
    public magicResistance: ValueContainer;
    public maximumHealth: ValueContainer;
    public maximumEnergy: ValueContainer;

    public all: Attribute[];

    public get (type: AttributeType): Attribute {
        return this.all.find(attr => attr.type === type);
    }

    public static create (attributes?: {
        attackSpeed?: number,
        attackDamage?: number,
        attackCriticalChance?: number,
        attackCriticalMultiplier?: number,
        armor?: number,
        magicResistance?: number,
        maximumHealth?: number,
        maximumEnergy?: number
    }): Attributes {
        const attributeTypesService = GameServices.attributeTypes;

        const newAttributes = new Attributes();

        if (!attributes) {
            attributes = {};
        }
        newAttributes.attackSpeed = new ValueContainer(attributes.attackSpeed);
        newAttributes.attackDamage = new ValueContainer(attributes.attackDamage);
        newAttributes.attackCriticalChance = new ValueContainer(attributes.attackCriticalChance);
        newAttributes.attackCriticalMultiplier = new ValueContainer(attributes.attackCriticalMultiplier);
        newAttributes.armor = new ValueContainer(attributes.armor);
        newAttributes.magicResistance = new ValueContainer(attributes.magicResistance);
        newAttributes.maximumHealth = new ValueContainer(attributes.maximumHealth);
        newAttributes.maximumEnergy = new ValueContainer(attributes.maximumEnergy);

        newAttributes.all = [
            <Attribute> {
                amount: newAttributes.attackSpeed,
                type: attributeTypesService.attackSpeed
            },
            <Attribute> {
                amount: newAttributes.attackDamage,
                type: attributeTypesService.attackDamage
            },
            <Attribute> {
                amount: newAttributes.attackCriticalChance,
                type: attributeTypesService.attackCriticalChance
            },
            <Attribute> {
                amount: newAttributes.attackCriticalMultiplier,
                type: attributeTypesService.attackCriticalMultiplier
            },
            <Attribute> {
                amount: newAttributes.armor,
                type: attributeTypesService.armor
            },
            <Attribute> {
                amount: newAttributes.magicResistance,
                type: attributeTypesService.magicResistance
            },
            <Attribute> {
                amount: newAttributes.maximumHealth,
                type: attributeTypesService.maximumHealth
            },
            <Attribute> {
                amount: newAttributes.maximumEnergy,
                type: attributeTypesService.maximumEnergy
            }
        ];

        return newAttributes;
    }
}
