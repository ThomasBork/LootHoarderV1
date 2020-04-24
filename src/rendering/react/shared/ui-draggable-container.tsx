import React = require("react");
import { Vector2 } from "../../../common/vector2";

type Props = {className?: string, children: React.ReactNode};
export class UIDraggableContainer extends React.Component<Props, {translate: Vector2, zoom: number}> {
    // Constants
    private minZoom = 0.2;
    private maxZoom = 2;
    private wheelZoomEffect = 0.001;
    private keyboardScrollSpeed = 1000;

    // Mouse movement
    private isDragging: boolean = false;
    private dragTranslateX: number;
    private dragTranslateY: number;
    private dragActualX: number;
    private dragActualY: number;

    // Keyboard movement
    private keysDown: number[] = [];
    private updateIntervalID: number;
    private documentKeyDownHandler: (event: KeyboardEvent) => void;
    private documentKeyUpHandler: (event: KeyboardEvent) => void;

    constructor(props: Props) {
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
    private getContainerFromEventTarget(eventTarget: EventTarget): HTMLElement {
        const targetElement = eventTarget as HTMLElement;
        const isContainer = targetElement.classList.contains('.draggable-container');
        const container = isContainer ? targetElement : targetElement.closest('.draggable-container');
        return container as HTMLElement;
    }
    private onWheel(wheelEvent: React.WheelEvent<HTMLDivElement>): void {
        const containerHTMLElement: HTMLElement = this.getContainerFromEventTarget(wheelEvent.target);
        const viewPortX = wheelEvent.clientX - containerHTMLElement.offsetLeft;
        const viewPortY = wheelEvent.clientY - containerHTMLElement.offsetTop;

        const previousZoom = this.state.zoom;
        const previousTranslateX = this.state.translate.x;
        const previousTranslateY = this.state.translate.y;
        const previousActualX = viewPortX / previousZoom - previousTranslateX;
        const previousActualY = viewPortY / previousZoom - previousTranslateY;

        const initialNewZoom = this.state.zoom - this.wheelZoomEffect * wheelEvent.deltaY;
        const actualNewZoom = this.setZoom(initialNewZoom);

        const newTranslateX = viewPortX / actualNewZoom - previousActualX;
        const newTranslateY = viewPortY / actualNewZoom - previousActualY;

        this.setState({
            translate: {
                x: newTranslateX,
                y: newTranslateY
            }
        });
    }
    private onMouseDown (mouseEvent: React.MouseEvent<HTMLDivElement>): void {
        const containerHTMLElement: HTMLElement = this.getContainerFromEventTarget(mouseEvent.target);
        this.isDragging = true;
        const viewPortX = mouseEvent.clientX - containerHTMLElement.offsetLeft;
        const viewPortY = mouseEvent.clientY - containerHTMLElement.offsetTop;
        const zoom = this.state.zoom;
        const translateX = this.state.translate.x;
        const translateY = this.state.translate.y;
        const actualX = viewPortX / zoom - translateX;
        const actualY = viewPortY / zoom - translateY;

        this.dragTranslateX = translateX;
        this.dragTranslateY = translateY;
        this.dragActualX = actualX;
        this.dragActualY = actualY;
    }
    private onMouseUp (mouseEvent: React.MouseEvent<HTMLDivElement>): void {
        this.isDragging = false;
    }
    private onMouseMove (mouseEvent: React.MouseEvent<HTMLDivElement>): void {
        if (this.isDragging) {
            const containerHTMLElement: HTMLElement = this.getContainerFromEventTarget(mouseEvent.target);
            const viewPortX = mouseEvent.clientX - containerHTMLElement.offsetLeft;
            const viewPortY = mouseEvent.clientY - containerHTMLElement.offsetTop;
            const zoom = this.state.zoom;
            const actualX = viewPortX / zoom - this.dragTranslateX;
            const actualY = viewPortY / zoom - this.dragTranslateY;
            const deltaX = actualX - this.dragActualX;
            const deltaY = actualY - this.dragActualY;
            const newTranslateX = this.dragTranslateX + deltaX;
            const newTranslateY = this.dragTranslateY + deltaY;
    
            this.setState({
                translate: {
                    x: newTranslateX,
                    y: newTranslateY
                }
            });
        }
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
    public UNSAFE_componentWillMount(): void {
        this.documentKeyDownHandler = (event: KeyboardEvent) => {this.handleKeyDown(event.keyCode)}
        this.documentKeyUpHandler = (event: KeyboardEvent) => {this.handleKeyUp(event.keyCode)}
        this.updateIntervalID = setInterval(() => this.update(50), 50);
        document.addEventListener("keydown", this.documentKeyDownHandler, false);
        document.addEventListener("keyup", this.documentKeyUpHandler, false);
    }
    public UNSAFE_componentWillUnmount(): void {
        clearInterval(this.updateIntervalID);
        document.removeEventListener("keydown", this.documentKeyDownHandler, false);
        document.removeEventListener("keyup", this.documentKeyUpHandler, false);
    }
    public getClassName(): string {
        if (this.props.className) {
            return `draggable-container ${this.props.className}`;
        } else {
            return `draggable-container`;
        }
    }
    public render(): JSX.Element {
        return (
            <div 
                className={this.getClassName()}
                onWheel={(event: React.WheelEvent<HTMLDivElement>) => this.onWheel(event)}
                onMouseDown={(event: React.MouseEvent<HTMLDivElement>) => this.onMouseDown(event)}
                onMouseUp={(event: React.MouseEvent<HTMLDivElement>) => this.onMouseUp(event)}
                onMouseMove={(event: React.MouseEvent<HTMLDivElement>) => this.onMouseMove(event)}
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
