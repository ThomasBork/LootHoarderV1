import React = require("react");
import { GameServices } from "../../../game/game-services";
import { ArenaType } from "../../../game/arenas/arena-type";
import { Vector2 } from "../../../common/vector2";
import { UIDraggableContainer } from "../shared/ui-draggable-container";

// export class UIMapBody extends React.Component<{}, {drawOffset: Vector2, zoom: number}> {
export class UIMapBody extends React.Component<{}, {}> {
    private arenaTypeWidth = 200;
    private arenaTypeHeight = 200;
    private arenaTypeMargin = 10;
    // private minZoom = 0.2;
    // private maxZoom = 2;
    // private wheelZoomEffect = 0.001;
    // private keyboardScrollEffect = 40;

    // private documentKeyDownHandler: (event: KeyboardEvent) => void;
    // constructor(props: {}) {
    //     super(props);

    //     this.state = {
    //         drawOffset: {x: 0, y: 0}, 
    //         zoom: 1
    //     };
    // }
    private getLeftInPixels(position: Vector2): string {
        //const value = this.state.drawOffset.x + (position.x * (this.arenaTypeWidth + this.arenaTypeMargin) * this.state.zoom);
        const value = position.x * (this.arenaTypeWidth + this.arenaTypeMargin);
        return value + 'px';
    }
    private getTopInPixels(position: Vector2): string {
        //const value = this.state.drawOffset.y + (position.y * (this.arenaTypeHeight + this.arenaTypeMargin) * this.state.zoom);
        const value = position.y * (this.arenaTypeHeight + this.arenaTypeMargin);
        return value + 'px';
    }
    private getWidthtInPixels(width: number): string {
        //const value = width * this.state.zoom;
        const value = width;
        return value + 'px';
    }
    private getHeightInPixels(height: number): string {
        //const value = height * this.state.zoom;
        const value = height;
        return value + 'px';
    }
    private getArenaTypeStyles(arenaType: ArenaType): React.CSSProperties {
        return {
            left: this.getLeftInPixels(arenaType.position),
            top: this.getTopInPixels(arenaType.position),
            width: this.getWidthtInPixels(this.arenaTypeWidth),
            height: this.getHeightInPixels(this.arenaTypeHeight)
        };
    }
    // private setZoom(value: number) {
    //     if (value < this.minZoom) {
    //         this.setState({zoom: this.minZoom});
    //     } else if (value > this.maxZoom) {
    //         this.setState({zoom: this.maxZoom});
    //     } else {
    //         this.setState({zoom: value});
    //     }
    // }
    // private onWheel(wheelEvent: React.WheelEvent<HTMLDivElement>): void {
    //     let zoom = this.state.zoom - this.wheelZoomEffect * wheelEvent.deltaY;
    //     this.setZoom(zoom);
    // }
    // private getMapStyles(): React.CSSProperties {
    //     return {
    //         zoom: this.state.zoom * 100 + '%',
    //         transform: `translate(${this.state.drawOffset.x}px, ${this.state.drawOffset.y}px)`
    //     };
    // }
    // private handleKeyDown(keyCode: number): void {
    //     let deltaX: number = 0;
    //     let deltaY: number = 0;
    //     switch(keyCode) {
    //         case 37: 
    //             deltaX = -this.keyboardScrollEffect;
    //         break;
    //         case 39: 
    //             deltaX = this.keyboardScrollEffect;
    //         break;
    //         case 38: 
    //             deltaY = -this.keyboardScrollEffect;
    //         break;
    //         case 40: 
    //             deltaY = this.keyboardScrollEffect;
    //         break;
    //     }
    //     this.setState({
    //         drawOffset: {
    //             x: this.state.drawOffset.x + deltaX, 
    //             y: this.state.drawOffset.y + deltaY
    //         }
    //     });
    // }
    // public componentWillMount(): void {
    //     this.documentKeyDownHandler = (event: KeyboardEvent) => {this.handleKeyDown(event.keyCode)}
    //     document.addEventListener("keydown", this.documentKeyDownHandler, false);
    // }
    // public componentWillUnmount(): void {
    //     document.removeEventListener("keydown", this.documentKeyDownHandler, false);
    // }
    public render(): JSX.Element {
        return (
            <UIDraggableContainer>
                <div className="map">
                    {GameServices.arenaTypes.allArenaTypes.map(arenaType => 
                        <div 
                            key={arenaType.key} 
                            className="arena-type" 
                            style={this.getArenaTypeStyles(arenaType)}
                        >{arenaType.name}</div>
                    )}
                </div>
            </UIDraggableContainer>
            // <div 
            //     id="map-container"
            //     onWheel={(event: React.WheelEvent<HTMLDivElement>) => this.onWheel(event)}
            // >
            //     <div id="map" style={this.getMapStyles()}>
            //         {GameServices.arenaTypes.allArenaTypes.map(arenaType => 
            //             <div 
            //                 key={arenaType.key} 
            //                 className="arena-type" 
            //                 style={this.getArenaTypeStyles(arenaType)}
            //             >{arenaType.name}</div>
            //         )}
            //     </div>
            // </div>
        );
    }
}
