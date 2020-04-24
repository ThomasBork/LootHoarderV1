import React = require("react");
import { Arena } from "../../../game/arenas/arena";
import { UICombatArenaCharacter } from "./ui-combat-arena-character";
import { Hero } from "../../../game/heroes/hero";
import { Character } from "../../../game/arenas/character";
import { Skill } from "../../../game/skills/skill";
import { UICombatArenaSkill } from "./ui-combat-arena-skill";

type Props = {arena: Arena};
type State = {
    selectedHero: Hero, 
    selectedSkill: Skill,
    isChoosingTarget: boolean, 
    legalTargets: Character[],
    hasPlayerLost: boolean,
    hasPlayerWon: boolean
};
export class UICombatArena extends React.Component<Props, State> {
    private heroContainerStyles: React.CSSProperties[] = [{
        left: '10px',
        bottom: '10px',
        zIndex: 12
    }, {
        left: '150px',
        bottom: '100px',
        zIndex: 11
    }, {
        left: '290px',
        bottom: '190px',
        zIndex: 10
    }];

    private monsterContainerStyles: React.CSSProperties[] = [{
        right: '10px',
        bottom: '10px',
        zIndex: 12
    }, {
        right: '150px',
        bottom: '100px',
        zIndex: 11
    }, {
        right: '290px',
        bottom: '190px',
        zIndex: 10
    }];

    public constructor(props: Props) {
        super(props);
        this.state = {
            selectedHero: props.arena.currentRoom.heroes[0],
            selectedSkill: null,
            isChoosingTarget: false,
            legalTargets: [],
            hasPlayerLost: props.arena.hasPlayerLost,
            hasPlayerWon: false
        };

        this.props.arena.onPlayerLose.addSubscription(this, () => this.onPlayerLose());
    }

    private selectSkill(skill: Skill): void {
        let legalTargets: Character[] = [];
        const friendTargets = this.props.arena.currentRoom.heroes.filter(hero => hero.isAlive);
        const enemyTargets = this.props.arena.currentRoom.currentEncounter.monsters.filter(monster => monster.isAlive);
        if (skill.type.canTargetFriend) {
            legalTargets = legalTargets.concat(friendTargets);
        }
        if (skill.type.canTargetEnemy) {
            legalTargets = legalTargets.concat(enemyTargets);
        }

        this.setState({
            selectedSkill: skill,
            isChoosingTarget: true,
            legalTargets: legalTargets
        });
    }

    private onClickOnCharacter(target: Character): void {
        if (this.state.isChoosingTarget && this.state.legalTargets.includes(target)) {
            this.props.arena.useSkill(this.state.selectedHero, target, this.state.selectedSkill);
        }
    }

    private onPlayerLose(): void {
        this.setState({
            selectedSkill: null,
            isChoosingTarget: false,
            hasPlayerLost: true
        });
    }
    
    public render(): JSX.Element {
        return (
            <div 
                className="arena" 
                style={{backgroundImage: `url(img/arenas/${this.props.arena.type.imageName})`}}
            >
                <div className="header">
                    <div className="room-info">
                        <div className="room-name">[RoomName]</div>
                        <div className="room-progress">{`Room ${this.props.arena.currentRoomIndex + 1}/${this.props.arena.rooms.length}`}</div>
                        <div className="encounter-progress">{`Encounter ${this.props.arena.currentRoom.currentEncounterIndex + 1}/${this.props.arena.currentRoom.encounters.length}`}</div>
                    </div>
                    <div className="arena-info">
                        <div className="arena-name">{this.props.arena.type.name}</div>
                        <div className="arena-level">{`Level ${this.props.arena.level}`}</div>    
                    </div>
                </div>

                <div className="body">
                    {this.props.arena.currentRoom.heroes.map((hero, index) =>
                        <div 
                            key={hero.id}
                            className={
                                `character-container selectable ${
                                this.state.selectedHero === hero ? 'selected' : ''} ${
                                (this.state.isChoosingTarget && this.state.legalTargets.includes(hero)) ? 'legal-target' : ''
                            }`}
                            style={this.heroContainerStyles[index]}
                            onClick={() => this.onClickOnCharacter(hero)}
                        >
                            <UICombatArenaCharacter character={hero}></UICombatArenaCharacter>
                        </div>
                    )}

                    {this.props.arena.currentRoom.currentEncounter.monsters.map((monster, index) =>
                        <div 
                            key={monster.id}
                            className={
                                `character-container ${
                                (this.state.isChoosingTarget && this.state.legalTargets.includes(monster)) ? 'legal-target' : ''
                            }`}
                            style={this.monsterContainerStyles[index]}
                            onClick={() => this.onClickOnCharacter(monster)}
                        >
                            <UICombatArenaCharacter character={monster}></UICombatArenaCharacter>
                        </div>
                    )}
                </div>

                <div className="footer">
                    <div className="skills-container">
                        {this.state.selectedHero.skills.map(skill =>
                            <UICombatArenaSkill 
                                key={skill.type.key}
                                skill={skill} 
                                onSkillSelected={() => this.selectSkill(skill)}
                            >
                            </UICombatArenaSkill>
                        )}
                    </div>
                </div>

                {this.state.hasPlayerLost
                    ?
                        <div className="overlay">
                            <div>
                                <div>You died!</div>
                                <button>Resurrect</button>
                            </div>
                        </div>
                    : null
                }
            </div>
        );
    }
}
