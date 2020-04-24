import React = require("react");
import { Character } from "../../../game/arenas/character";
import { UIProgressBar } from "../shared/ui-progress-bar";
import { Hero } from "../../../game/heroes/hero";

type Props = {character: Character};
type State = {currentHealth: number, isAlive: boolean};
export class UICombatArenaCharacter extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props);
        this.state = {
            currentHealth: props.character.currentHealth,
            isAlive: props.character.isAlive
        };
    }
    public componentDidMount(): void {
        this.props.character.onDamageTaken.addSubscription(
            this, 
            event => 
                this.setState({
                    currentHealth: this.props.character.currentHealth,
                    isAlive: this.props.character.isAlive
                })
        );
    }
    public componentWillUnmount(): void {
        this.props.character.onDamageTaken.removeSubscription(this);
    }
    private getImageFolderPath(): string {
        return this.props.character instanceof Hero 
            ? 'img/heroes/'
            : 'img/monsters/';
    }
    private getImageName(): string {
        return this.state.isAlive ? this.props.character.type.imageName : "tombstone.png";
    }
    public render(): JSX.Element {
        return (
            <div className="character">
                <div className="character-name">{this.props.character.name}</div>
                <UIProgressBar
                    min={0} 
                    max={this.props.character.attributes.maximumHealth.value} 
                    current={this.state.currentHealth}
                ></UIProgressBar>
                <div 
                    className="character-image" 
                    style={{backgroundImage: `url(${this.getImageFolderPath()}${this.getImageName()})`}}
                >
                </div>
            </div>
        );
    }
}
