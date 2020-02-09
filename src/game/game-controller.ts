import { Game } from "./Game";
import { GameRunner } from "./game-runner";
import { DBGame } from "../game-state/db-game";
import { GameServices } from "./game-services";

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
            }]
        };

        this.game = new Game();
        this.game.load(dbGame);

        this.gameRunner.beginUpdating(this.game);
    }
}
