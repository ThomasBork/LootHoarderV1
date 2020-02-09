import React = require("react");
import { Game } from "../../game/game";

export class UIBody extends React.Component<{game: Game},{}> {
    public render(): JSX.Element {
        return (
            <div id="body">
            </div>
        );
    }
}