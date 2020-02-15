import * as React from "react";
import * as ReactDOM from "react-dom";

import './general.scss';
import './structure.scss';
import './map/map.scss'

import { UIGame } from "./ui-game";
import { GameServices } from "../../game/game-services";

GameServices.initialize();

ReactDOM.render(
    <UIGame />,
    document.getElementById("game-container")
);