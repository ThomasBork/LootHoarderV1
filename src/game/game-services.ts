import { AttributeTypeService } from "./attributes/attribute-type-service";
import { VersionService } from "./version-service";
import { RandomService } from "./shared/random-service";
import { SkillTypeService } from "./skills/skill-type-service";
import { MonsterTypeService } from "./monsters/monster-type-service";
import { MonsterService } from "./monsters/monster-service";
import { ArenaTypeService } from "./arenas/arena-type-service";
import { Game } from "./Game";
import { GameController } from "./game-controller";
import { HeroTypeService } from "./heroes/hero-type-service";

export class GameServices {
    public static arenaTypes: ArenaTypeService;
    public static attributeTypes: AttributeTypeService;
    public static heroTypes: HeroTypeService;
    public static monsterTypes: MonsterTypeService;
    public static monsters: MonsterService;
    public static random: RandomService;
    public static skillTypes: SkillTypeService;
    public static version: VersionService;

    public static currentGame: Game;
    public static currentGameController: GameController;

    private constructor () {};

    public static initialize() {
        GameServices.arenaTypes = new ArenaTypeService();
        GameServices.arenaTypes.initialize();

        GameServices.attributeTypes = new AttributeTypeService();
        GameServices.attributeTypes.initialize();
        
        GameServices.skillTypes = new SkillTypeService();
        GameServices.skillTypes.initialize();

        GameServices.heroTypes = new HeroTypeService();
        GameServices.heroTypes.initialize();

        GameServices.monsterTypes = new MonsterTypeService();
        GameServices.monsterTypes.initialize();

        GameServices.monsters = new MonsterService();

        GameServices.random = new RandomService();


        GameServices.version = new VersionService();
    }
}
