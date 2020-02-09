import * as React from "react";
import { Game } from "../../game/game";
import { GameContext } from "./UIGameContext";
import { UIHeader } from "./UIHeader";
import { UIBody } from "./UIBody";
import { GameController } from "../../game/game-controller";
import { GameServices } from "../../game/game-services";

export class UIGame extends React.Component<{}, {game: Game}> {
    constructor (props: {game: Game}) {
        super(props);

        this.state = {game: null};
    }
    newGame() {
        const gameController = new GameController();
        gameController.initialize();

        gameController.newGame();
        
        this.setState({game: gameController.game});
    }
    render() {
        return (
            <div>
                <UIHeader versionNumber={GameServices.version.currentVersion} onNewGameClick={()=>this.newGame()}></UIHeader>
                {
                    this.state.game
                    ? 
                    <GameContext.Provider value={this.state.game}>
                        <UIBody game={this.state.game}></UIBody>
                    </GameContext.Provider>
                    : null
                }
            </div>
        );
    }
}