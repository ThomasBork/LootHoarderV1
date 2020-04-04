import React = require("react");
import { GameServices } from "../../../game/game-services";
import { ArenaType } from "../../../game/arenas/arena-type";
import { Vector2 } from "../../../common/vector2";
import { UIDraggableContainer } from "../shared/ui-draggable-container";
import { UIMapArenaTypeInformation } from "./ui-map-arena-type-information";

type State = {selectedArenaType: ArenaType};
export class UIMapBody extends React.Component<{}, State> {
    private arenaTypeWidth = 200;
    private arenaTypeHeight = 200;
    private arenaTypeMargin = 10;

    constructor(props: {}) {
        super(props);

        this.state = {
            selectedArenaType: undefined
        };
    }

    private getLeftInPixels(position: Vector2): string {
        const value = position.x * (this.arenaTypeWidth + this.arenaTypeMargin);
        return value + 'px';
    }
    private getTopInPixels(position: Vector2): string {
        const value = position.y * (this.arenaTypeHeight + this.arenaTypeMargin);
        return value + 'px';
    }
    private getWidthtInPixels(width: number): string {
        const value = width;
        return value + 'px';
    }
    private getHeightInPixels(height: number): string {
        const value = height;
        return value + 'px';
    }
    private getArenaTypeStyles(arenaType: ArenaType): React.CSSProperties {
        return {
            left: this.getLeftInPixels(arenaType.position),
            top: this.getTopInPixels(arenaType.position),
            width: this.getWidthtInPixels(this.arenaTypeWidth),
            height: this.getHeightInPixels(this.arenaTypeHeight),
            backgroundImage: `url(img/arenas/${arenaType.imageName})`
        };
    }
    private selectArenaType(arenaType: ArenaType): void {
        this.setState({selectedArenaType: arenaType});
    }
    private handleArenaTypeClick(event: React.MouseEvent, arenaType: ArenaType): void {
        event.stopPropagation();
        this.selectArenaType(arenaType);
    }

    public render(): JSX.Element {
        return (
            <div id="map-body-container">
                <div className="info-panel">
                    {this.state.selectedArenaType
                        ? 
                            <UIMapArenaTypeInformation 
                                arenaType={this.state.selectedArenaType}
                                arenaStarted={() => {}}
                            ></UIMapArenaTypeInformation>
                        : null
                    }
                </div>
                <div className="map-container">
                    <UIDraggableContainer>
                        <div className="map">
                            {GameServices.arenaTypes.allArenaTypes.map(arenaType => 
                                <div 
                                    key={arenaType.key} 
                                    className="arena-type" 
                                    style={this.getArenaTypeStyles(arenaType)}
                                    onMouseDown={event => this.handleArenaTypeClick(event, arenaType)}
                                >
                                    <div className="header">
                                        <span className="name">{arenaType.name}</span>
                                        <span className="level">Lv.{arenaType.level}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </UIDraggableContainer>
                </div>
            </div>
        );
    }
}
