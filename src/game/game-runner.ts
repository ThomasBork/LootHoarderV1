import { Game } from "./Game";
import { Observable, ObservableFactory } from "../common/Observable";

export class GameRunner {
    private updateFrequency: number = 100;
    private maxTimeToResumePerUpdate: number = 24 * 60 * 60 * 1000;

    private updateIntervalID: number;
    private lastUpdateAsNumber: number = Date.now();

    private game: Game;
    
    public onUpdate: Observable = ObservableFactory.create();

    public beginUpdating(game: Game): void {
        this.game = game;

        if (this.updateIntervalID) {
            clearInterval(this.updateIntervalID);
        }

        this.updateIntervalID = setInterval(() => {
            this.update();
        }, this.updateFrequency);
    }

    private update (): void {
        let timeSinceLastUpdate = Date.now() - this.lastUpdateAsNumber;

        // Cap catch up duration
        if (timeSinceLastUpdate > this.maxTimeToResumePerUpdate) {
            timeSinceLastUpdate = this.maxTimeToResumePerUpdate;
            this.lastUpdateAsNumber = Date.now() - this.maxTimeToResumePerUpdate;
        }

        // Update until caught up
        while (timeSinceLastUpdate > this.updateFrequency) {
            timeSinceLastUpdate -= this.updateFrequency;
            this.lastUpdateAsNumber = this.lastUpdateAsNumber + this.updateFrequency;

            this.game.update(this.updateFrequency);
        }

        this.onUpdate.notify();
    }
}
