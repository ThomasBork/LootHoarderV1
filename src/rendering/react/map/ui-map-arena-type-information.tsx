import React = require("react");
import { ArenaType } from "../../../game/arenas/arena-type";
import { GameServices } from "../../../game/game-services";
import { Hero } from "../../../game/heroes/hero";
import { Arena } from "../../../game/arenas/arena";

type Props = {
    arenaType: ArenaType, 
    arenaStarted: (arena: Arena) => void
};
type State = {selectedHeroes: Hero[]};
export class UIMapArenaTypeInformation extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props);
        this.state = {
            selectedHeroes: []
        };
    }
    private toggleSelectedHero(hero: Hero): void {
        if (this.state.selectedHeroes.includes(hero)) {
            this.setState({
                selectedHeroes: this.state.selectedHeroes.filter(selectedHero => selectedHero !== hero)
            });
        } else {
            this.setState({
                selectedHeroes: [...this.state.selectedHeroes, hero]
            });
        }
    }
    private handleStartArenaClicked(arenaType: ArenaType): void {
        if (this.state.selectedHeroes.length > 0) {
            const arena = GameServices.currentGame.spawnArena(arenaType, arenaType.level, this.state.selectedHeroes);
            this.props.arenaStarted(arena);
        }
    }
    public render(): JSX.Element {
        return (
            <div>
                <div>{`${this.props.arenaType.name} (Lv. ${this.props.arenaType.level})`}</div>
                <div>Heroes</div>
                <div className="heroes">
                    {GameServices.currentGame.heroes.map(hero => 
                        <div
                            key={hero.id}
                            className="hero"
                            onClick={() => this.toggleSelectedHero(hero)}
                        >
                            <div>{hero.name}</div>
                            <img src={`img/heroes/${hero.type.imageName}`} />
                            {this.state.selectedHeroes.includes(hero)
                                ? <div className="checkmark" style={{backgroundImage: "url(img/interface/checkmark.png)"}}></div>
                                : null
                            }
                        </div>
                    )}
                </div>
                <button onClick={() => this.handleStartArenaClicked(this.props.arenaType)}>Start arena</button>
            </div>
        );
    }
}