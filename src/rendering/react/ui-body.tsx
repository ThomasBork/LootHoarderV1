import React = require("react");
import { UITabButton } from "./shared/ui-tab-button";
import { UIMapBody } from "./map/ui-map-body";
import { UIHeroesBody } from "./heroes/ui-heroes-body";

interface TabProps {
    key: string;
    text: string;
    imageUrl: string;
}

export class UIBody extends React.Component<{},{activeTabKey: string}> {
    private tabs: TabProps[];

    constructor(props: {}) {
        super(props);

        this.tabs = [
            {
                key: 'heroes',
                text: 'Heroes',
                imageUrl: 'img/tabs/heroes.png'
            },
            {
                key: 'combat',
                text: 'Combat',
                imageUrl: 'img/tabs/combat.png'
            },
            {
                key: 'map',
                text: 'Map',
                imageUrl: 'img/tabs/map.png'
            },
            {
                key: 'quests',
                text: 'Quests',
                imageUrl: 'img/tabs/quests.png'
            },
        ]

        this.state = {activeTabKey: "heroes"};
    }
    private selectTab(tabKey: string): void {
        this.setState ({activeTabKey: tabKey});
    }
    private renderCurrentTabBody(): JSX.Element {
        switch(this.state.activeTabKey) {
            case 'heroes':
                return <UIHeroesBody></UIHeroesBody>;
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