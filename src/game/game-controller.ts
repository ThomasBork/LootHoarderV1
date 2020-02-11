import { Game } from "./Game";
import { GameRunner } from "./game-runner";
import { DBGame } from "../game-state/db-game";
import { GameServices } from "./game-services";
import { DBArena } from "../game-state/db-arena";

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
                id: 0,
                name: 'Heltefar',
                level: 1,
                experience: 0,
                isAlive: true
            }],
            arenas: []
        };

        this.game = new Game();
        this.game.load(dbGame);

        const arenaType = GameServices.arenaTypes.allArenaTypes[0];
        this.game.spawnArena(arenaType, 1, [this.game.heroes[0]]);

        this.gameRunner.beginUpdating(this.game);
    }
}
