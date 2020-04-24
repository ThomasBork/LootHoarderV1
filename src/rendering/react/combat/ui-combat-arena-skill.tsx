import React = require("react");
import { Skill } from "../../../game/skills/skill";

type Props = {skill: Skill, onSkillSelected: () => void};
type State = {remainingCooldown: number};
export class UICombatArenaSkill extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props);
        this.state = {
            remainingCooldown: props.skill.remainingCooldown
        };
    }
    public componentDidMount(): void {
        this.props.skill.onCooldownChanged.addSubscription(
            this, 
            event => 
                this.setState({
                    remainingCooldown: this.props.skill.remainingCooldown
                })
        );
    }
    public componentWillUnmount(): void {
        this.props.skill.onCooldownChanged.removeSubscription(this);
    }
    public render(): JSX.Element {
        return (
            <div 
                key={this.props.skill.type.key} 
                className="skill-container"
                onClick={() => this.props.onSkillSelected()}
                style={{opacity: 1 - this.state.remainingCooldown / this.props.skill.type.cooldown}}
            >
                <div className="skill-name">{this.props.skill.type.name}</div>
                <div className="skill-image" style={{backgroundImage: `url(img/skills/${this.props.skill.type.imageName})`}}></div>
            </div>
        );
    }
}
