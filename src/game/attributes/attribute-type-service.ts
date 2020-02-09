import { AttributeType } from "./attribute-type";

export class AttributeTypeService {
    public attackSpeed: AttributeType;
    public attackDamage: AttributeType;
    public attackCriticalChance: AttributeType;
    public attackCriticalMultiplier: AttributeType;
    public armor: AttributeType;
    public magicResistance: AttributeType;
    public maximumHealth: AttributeType;
    public maximumEnergy: AttributeType;

    public initialize () {
        this.attackSpeed = <AttributeType> {
            key: 'attack-speed',
            name: 'Attack speed',
            description: 'More attack speed decreases the time needed to recover after performing an attack.'
        };
        this.attackDamage = <AttributeType> {
            key: 'attack-damage',
            name: 'Attack damage',
            description: 'Increases the damage dealt by attacks.'
        };
        this.attackCriticalChance = <AttributeType> {
            key: 'attack-critical-chance',
            name: 'Critical chance',
            description: 'The chance to deal a critical strike with attacks.'
        };
        this.attackCriticalMultiplier = <AttributeType> {
            key: 'attack-critical-multiplier',
            name: 'Critical multiplier',
            description: 'How much damage a critical hit does'
        };
        this.armor = <AttributeType> {
            key: 'armor',
            name: 'Armor',
            description: 'Decreases the physical damage taken.'
        };
        this.magicResistance = <AttributeType> {
            key: 'magic-resistance',
            name: 'Magic Resistance',
            description: 'Decreases the magic damage taken.'
        };
        this.maximumHealth = <AttributeType> {
            key: 'maximum-health',
            name: 'Maximum Health',
            description: 'The character loses health whenever it takes any damage.'
        };
        this.maximumEnergy = <AttributeType> {
            key: 'maximum-energy',
            name: 'Maximum Energy',
            description: 'Some skills cost energy.'
        };
    }
}
