import { AttributeTypeService } from "./attributes/attribute-type-service";
import { VersionService } from "./version-service";
import { RandomService } from "./shared/random-service";
import { SkillTypeService } from "./skills/skill-type-service";
import { MonsterTypeService } from "./monsters/monster-type-service";
import { MonsterService } from "./monsters/monster-service";
import { ArenaTypeService } from "./arenas/arena-type-service";
import { Game } from "./game";
import { GameController } from "./game-controller";
import { HeroTypeService } from "./heroes/hero-type-service";
import { NumberFormattingService } from "../common/number-formatting-service";
import { PassiveAbilityTypeService } from "./items/passive-ability-type-service";
import { PassiveAbilityGeneratorService } from "./items/passive-ability-generator-service";
import { ItemTypeService } from "./items/item-type-service";
import { HeroService } from "./heroes/hero-service";

export class GameServices {
    public static random: RandomService;
    public static numberFormatting: NumberFormattingService

    public static arenaTypes: ArenaTypeService;
    public static attributeTypes: AttributeTypeService;
    public static heroTypes: HeroTypeService;
    public static hero: HeroService;
    public static monsterTypes: MonsterTypeService;
    public static monsters: MonsterService;
    public static skillTypes: SkillTypeService;
    public static passiveAbilityGenerators: PassiveAbilityGeneratorService;
    public static passiveAbilityTypes: PassiveAbilityTypeService;
    public static itemTypes: ItemTypeService;
    
    public static version: VersionService;
    
    public static currentGame: Game;
    public static currentGameController: GameController;

    private constructor () {};

    public static initialize() {
        GameServices.random = new RandomService();

        GameServices.numberFormatting = new NumberFormattingService();

        GameServices.arenaTypes = new ArenaTypeService();
        GameServices.arenaTypes.initialize();

        GameServices.attributeTypes = new AttributeTypeService();
        GameServices.attributeTypes.initialize();
        
        GameServices.skillTypes = new SkillTypeService();
        GameServices.skillTypes.initialize();

        GameServices.heroTypes = new HeroTypeService();
        GameServices.heroTypes.initialize();

        GameServices.hero = new HeroService();

        GameServices.monsterTypes = new MonsterTypeService();
        GameServices.monsterTypes.initialize();

        GameServices.monsters = new MonsterService();

        GameServices.passiveAbilityTypes = new PassiveAbilityTypeService();
        GameServices.passiveAbilityTypes.initialize();

        GameServices.passiveAbilityGenerators = new PassiveAbilityGeneratorService();
        GameServices.passiveAbilityGenerators.initialize();

        GameServices.itemTypes = new ItemTypeService();
        GameServices.itemTypes.initialize();



        GameServices.version = new VersionService();
    }
}
