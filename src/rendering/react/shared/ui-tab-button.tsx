import React = require("react");

export class UITabButton extends React.Component<{text: string, imageUrl: string, isActive: boolean, onClick: () => void}> {
    public render(): JSX.Element {
        let className = 'tab';
        if (this.props.isActive) {
            className += ' active';
        }

        return (
            <li className={className} onClick={this.props.onClick}>
                <span>{this.props.text}</span>
                <img src={this.props.imageUrl} />
            </li>
        );
    }
}