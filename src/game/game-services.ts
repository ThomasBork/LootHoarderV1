import { AttributeTypeService } from "./attributes/attribute-type-service";
import { VersionService } from "./version-service";
import { RandomService } from "./shared/random-service";
import { SkillTypeService } from "./skills/skill-type-service";
import { MonsterTypeService } from "./monsters/monster-type-service";
import { MonsterService } from "./monsters/monster-service";

export class GameServices {
    public static attributeTypes: AttributeTypeService;
    public static monsterTypes: MonsterTypeService;
    public static monsters: MonsterService;
    public static random: RandomService;
    public static skillTypes: SkillTypeService;
    public static version: VersionService;

    private constructor () {};

    public static initialize() {
        GameServices.attributeTypes = new AttributeTypeService();
        GameServices.attributeTypes.initialize();

        GameServices.monsterTypes = new MonsterTypeService();

        GameServices.monsters = new MonsterService();

        GameServices.random = new RandomService();

        GameServices.skillTypes = new SkillTypeService();

        GameServices.version = new VersionService();
    }
}
