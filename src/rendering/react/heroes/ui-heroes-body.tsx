import React = require("react");
import { GameServices } from "../../../game/game-services";
import { Hero } from "../../../game/heroes/hero";
export class UIHeroesBody extends React.Component<{}, {}> {
    private get heroes(): Hero[] {
        return GameServices.currentGame.heroes;
    }
    public render(): JSX.Element {
        return (
            <div id="heroes-body-container">
                <ul className="heroes">
                {this.heroes.map(hero => 
                    <li
                        key={hero.id}
                    >
                        <div>{hero.name}</div>
                        <img src={`img/heroes/${hero.type.imageName}`} />
                    </li>
                )}
                </ul>
            </div>
        );
    }
}
