import React = require("react");
import { GameServices } from "../../../game/game-services";
import { Arena } from "../../../game/arenas/arena";
import { UICombatArena } from "./ui-combat-arena";

type Props = {selectedArena: Arena};
type State = {selectedArena: Arena};
export class UICombatBody extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props);
        this.state = {
            selectedArena: GameServices.currentGame.arenas.length > 0 
                ? GameServices.currentGame.arenas[0]
                : null
        };
    }
    private get arenas(): Arena[] {
        return GameServices.currentGame.arenas;
    }
    private setSelectedArena(arena: Arena) {
        this.setState({
            selectedArena: arena
        });
    }
    public render(): JSX.Element {
        return (
            <div id="combat-body-container">
                <div className="arenas-container">
                    <ul className="arenas">
                        {this.arenas.map((arena, index) => 
                            <li
                                key={index}
                                className="arena"
                                onClick={() => this.setSelectedArena(arena)}
                            >
                                <div>{arena.type.name}</div>
                            </li>
                        )}
                    </ul>
                </div>
                {this.state.selectedArena 
                    ?   
                        <div className="selected-arena-container">
                            <UICombatArena arena={this.state.selectedArena}></UICombatArena>
                        </div>
                    : null
                }
                
            </div>
        );
    }
}
