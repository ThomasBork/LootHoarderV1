import { Game } from "./Game";
import { GameRunner } from "./game-runner";
import { DBGame } from "../game-state/db-game";
import { GameServices } from "./game-services";
import { DBArena } from "../game-state/db-arena";
import { ItemBodyLocation } from "./items/item-body-location";
import { PassiveAbilityArguments } from "./items/passive-ability-arguments";

export class GameController {
    public game: Game;
    public gameRunner: GameRunner;

    public initialize(): void {
        this.gameRunner = new GameRunner();
    }

    public newGame() {
        const dbGame = <DBGame> {
            version: GameServices.version.currentVersion,
            startTime: new Date(),
            heroes: [{
                id: 1,
                typeKey: 'warrior',
                name: 'Heltefar',
                level: 1,
                experience: 0,
                currentHealth: undefined,
                isAlive: true,
                skills: [{
                    typeKey: 'basic-attack',
                    remainingCooldown: 0
                }],
                items: [{
                    key: ItemBodyLocation.mainHand,
                    value: {
                        id: 0,
                        typeKey: 'broad-sword',
                        level: 1,
                        implicitPassiveAbilities: [{
                            typeKey: 'increased-attack-damage',
                            args: {
                                'attack-damage': 4
                            }
                        }],
                        explicitPassiveAbilities: []
                    }
                }]
            }],
            arenas: [],
            items: []
        };

        this.game = Game.load(dbGame);

        this.gameRunner.beginUpdating(this.game);
    }
}
