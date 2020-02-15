import React = require("react");
import { Game } from "../../game/game";
import { UITabButton } from "./shared/ui-tab-button";
import { UIMapBody } from "./map/ui-map-body";

interface TabProps {
    key: string;
    text: string;
    imageUrl: string;
}

export class UIBody extends React.Component<{game: Game},{activeTabKey: string}> {
    private tabs: TabProps[];

    constructor(props: {game:Game}) {
        super(props);

        this.tabs = [
            {
                key: 'hero',
                text: 'Hero',
                imageUrl: 'img/tabs/heroes.png'
            },
            {
                key: 'combat',
                text: 'Combat',
                imageUrl: 'img/tabs/heroes.png'
            },
            {
                key: 'map',
                text: 'Map',
                imageUrl: 'img/tabs/heroes.png'
            },
            {
                key: 'quests',
                text: 'Quests',
                imageUrl: 'img/tabs/heroes.png'
            },
        ]

        this.state = {activeTabKey: "hero"};
    }
    private selectTab(tabKey: string): void {
        this.setState ({activeTabKey: tabKey});
    }
    private renderCurrentTabBody(): JSX.Element {
        switch(this.state.activeTabKey) {
            case 'hero':
                return null;
            case 'combat':
                return null;
            case 'map':
                return <UIMapBody></UIMapBody>;
            case 'quests':
                return null;
            default: 
                return null;
        }
    }
    public render(): JSX.Element {
        return (
            <div id="body">
                <ul className="tabs">
                    {this.tabs.map(tab =>
                        <UITabButton 
                            key={tab.key}
                            text={tab.text} 
                            imageUrl={tab.imageUrl} 
                            isActive={this.state.activeTabKey === tab.key}
                            onClick={() => this.selectTab(tab.key)}
                        ></UITabButton>
                    )}
                </ul>
                <div className="tab-body">
                    {this.renderCurrentTabBody()}
                </div>
            </div>
        );
    }
}