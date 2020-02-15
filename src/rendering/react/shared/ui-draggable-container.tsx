import React = require("react");
import { Vector2 } from "../../../common/vector2";

export class UIDraggableContainer extends React.Component<{children: React.ReactNode}, {translate: Vector2, zoom: number}> {
    private minZoom = 0.2;
    private maxZoom = 2;
    private wheelZoomEffect = 0.001;
    private keyboardScrollSpeed = 1000;

    private keysDown: number[] = [];
    private updateIntervalID: number;
    private documentKeyDownHandler: (event: KeyboardEvent) => void;
    private documentKeyUpHandler: (event: KeyboardEvent) => void;

    constructor(props: {children: React.ReactNode}) {
        super(props);

        this.state = {
            translate: {x: 0, y: 0}, 
            zoom: 1
        };
    }
    
    private setZoom(value: number): number {
        let newZoom = value;
        if (value < this.minZoom) {
            newZoom = this.minZoom;
        } else if (value > this.maxZoom) {
            newZoom = this.maxZoom;
        }
        this.setState({zoom: newZoom});
        return newZoom;
    }
    private onWheel(wheelEvent: React.WheelEvent<HTMLDivElement>): void {
        let zoom = this.state.zoom - this.wheelZoomEffect * wheelEvent.deltaY;
        const domElement: HTMLElement = (wheelEvent.target as HTMLElement).closest('.draggable-container');
        const previousZoom = this.state.zoom;
        const newZoom = this.setZoom(zoom);
        const zoomChange = newZoom / previousZoom;
        const localX = wheelEvent.clientX - domElement.offsetLeft;
        const localY = wheelEvent.clientY - domElement.offsetTop;
        const xFactor = localX / domElement.clientWidth;
        const yFactor = localY / domElement.clientHeight;
        const deltaX = -(domElement.clientWidth * xFactor * zoomChange);
        const deltaY = -(domElement.clientHeight * yFactor * zoomChange);
        this.setState({
            translate: {
                x: this.state.translate.x + deltaX,
                y: this.state.translate.y + deltaY
            }
        });
    }
    private handleKeyDown(keyCode: number): void {
        if (!this.keysDown.includes(keyCode)) {
            this.keysDown.push(keyCode);
        }
    }
    private handleKeyUp(keyCode: number): void {
        if (this.keysDown.includes(keyCode)) {
            this.keysDown.splice(this.keysDown.indexOf(keyCode), 1);
        }
    }
    private getDraggableStyles(): React.CSSProperties {
        return {
            zoom: this.state.zoom * 100 + '%',
            transform: `translate(${this.state.translate.x}px, ${this.state.translate.y}px)`
        };
    }
    private update(dTime: number): void {
        let deltaX: number = 0;
        let deltaY: number = 0;
        if (this.keysDown.includes(37)) {
            deltaX -= this.keyboardScrollSpeed;
        }
        if (this.keysDown.includes(39)) {
            deltaX += this.keyboardScrollSpeed;
        }
        if (this.keysDown.includes(38)) {
            deltaY -= this.keyboardScrollSpeed;
        }
        if (this.keysDown.includes(40)) {
            deltaY += this.keyboardScrollSpeed;
        }
        this.setState({
            translate: {
                x: this.state.translate.x + deltaX / dTime,
                y: this.state.translate.y + deltaY / dTime
            }
        });
    }
    public componentWillMount(): void {
        this.documentKeyDownHandler = (event: KeyboardEvent) => {this.handleKeyDown(event.keyCode)}
        this.documentKeyUpHandler = (event: KeyboardEvent) => {this.handleKeyUp(event.keyCode)}
        this.updateIntervalID = setInterval(() => this.update(50), 50);
        document.addEventListener("keydown", this.documentKeyDownHandler, false);
        document.addEventListener("keyup", this.documentKeyUpHandler, false);
    }
    public componentWillUnmount(): void {
        clearInterval(this.updateIntervalID);
        document.removeEventListener("keydown", this.documentKeyDownHandler, false);
        document.removeEventListener("keyup", this.documentKeyUpHandler, false);
    }
    public render(): JSX.Element {
        return (
            <div 
                className="draggable-container"
                onWheel={(event: React.WheelEvent<HTMLDivElement>) => this.onWheel(event)}
            >
                <div 
                    className="draggable"
                    style={this.getDraggableStyles()}
                >
                    { this.props.children }
                </div>
            </div>
        );
    }
}
