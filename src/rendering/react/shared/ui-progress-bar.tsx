import React = require("react");

export class UIProgressBar extends React.Component<{min: number, max: number, current: number}> {
    private getFillPercentage(): number {
        return 100 * (this.props.max - this.props.current) / (this.props.max - this.props.min); 
    }
    public render(): JSX.Element {
        return (
            <div className="progress-bar">
                <div className="bar" style={{width: this.getFillPercentage() + '%'}}></div>
            </div>
        );
    }
}
