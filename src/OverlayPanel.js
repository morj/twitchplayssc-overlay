import React, {Component} from 'react';

export class OverlayPanel extends Component {
    /*constructor(props) {
        super(props);
        this.lastChatMessage = null;
    }*/

    // TODO: componentDidUpdate

    render() {
        const state = this.props.state;
        const creepingLineElementWidth = 635; // TODO: extract constants
        const creepTime = state.creepingLine.text.length / 7;
        const creepingTextStyle = {
            width: `${state.creepingLine.text.length * 16}px`,
            '-webkit-animation-duration': `${creepTime}s`,
            'animation-duration': `${creepTime}s`
        };
        const animationRules = `
			@keyframes slide {
				from {
					transform: translate(` + creepingLineElementWidth + `px, 0); 
				}
				to {
					transform: translate(-100%, 0);
				}
			}
		`;
		
		return (
            <div className="adjust-me-overlay text-regular">
                <div className="unit-portrait-patch"/>
                
				{state.gameIntro &&
				<div className={'global-center-box ' + (state.gameIntro.fadeOut ? 'fadeOut' : '')}>
					{state.gameIntro && <div className="game-intro">{state.gameIntro.intro}</div>}
					{state.gameIntro && <div className="game-opponent">{state.gameIntro.opponent}</div>}
					{state.gameIntro && <div className="game-description">{state.gameIntro.description}</div>}
				</div>}

                {state.attentionBanner && state.attentionBanner.enabled &&
                <div className="global-important-message">{state.attentionBanner.text}</div>}
                <div className="main-panel">
                    <div className="left-panel">
                        <div className="creeping-line">
                            <style dangerouslySetInnerHTML={{__html: animationRules}}/>
                            {state.creepingLine && state.creepingLine.enabled &&
                            <div className="text" style={creepingTextStyle}
                                 dangerouslySetInnerHTML={{__html: state.creepingLine.text}}>
                            </div>}
                        </div>
                        <div className="stats">
                            <div className="stat-block small">
                                <span className="key">players</span>
                                <span className="value">{state.stats.players}</span>
                            </div>
                            <div className="stat-block small">
                                <span className="key">apm</span>
                                <span className="value">{state.stats.apm}</span>
                            </div>
                            <div className="stat-block large">
                                <span className="key">won/lost</span>
                                <span className="value">{state.stats.gamesWon}/{state.stats.gamesLost}</span>
                            </div>
                            <div className="stat-block large">
                                <span className="key">ai level</span>
                                <span className="value">{state.stats.aiLevel}</span>
                            </div>
                        </div>
                        <div className="supporter recent-sub">
                            <span className="key">recent sub</span>
                            <span className="value"></span>
                        </div>
                        <div className="supporter recent-donation">
                            <span className="key">recent donations</span>
                            <span className="value"></span>
                        </div>
                    </div>
                    <div className="right-panel">
                        <table className="detailed-stats">
                            <thead>
                            <tr>
                                <th>enemy units killed</th>
                                <th>xp gained</th>
                            </tr>
                            </thead>
                            <tbody>
                            {[0, 1, 2, 3, 4].map((i) => <tr key={i} className="player-stat">
                                {OverlayPanel.statCell(state.playerStats.topUnitsKilled[i])}
                                {OverlayPanel.statCell(state.playerStats.xpGained[i])}
                            </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="command-card">
                    <table className="structure-table">
                        <tbody>
                        <tr>
                            {this.buildings('forge', 'core', 'twilight', 'robobay', 'beacon', 'archives', 'shrine')}
                        </tr>
                        <tr>
                            {this.upgrades('weapons-ground', 'weapons-air')}
                            {this.researches('zealot', 'obs', 'phoenix', 'storm', 'dt')}
                        </tr>
                        <tr>
                            {this.upgrades('armor-ground', 'armor-air')}
                            {this.researches('stalker', 'prism', 'voidray'/*, 'carrier'*/)}
                            <td/>
                            <td/>
                        </tr>
                        <tr>
                            {this.upgrades('shields')}
                            {this.researches('warp', 'adept', 'colossus')}
                            {this.buildings('gate', 'robo', 'stargate')}
                        </tr>
                        </tbody>
                    </table>
                </div>
                {/*<div className="right-panel chat">{
                    state.data.map((item, index) => <div key={index} className="message">
                        {item.text}
                    </div>)
                }
                    <div className="cursor" ref={(el) => {
                        this.lastChatMessage = el;
                    }}/>
                </div>*/}
            </div>
        );

    }

    static statCell(data) {
        return (<td>
            {data && <div className="name" style={
                {width: `${data.count ? (210 - data.count.toString().length * 10) : 0}px`}
            }>{data.name}</div>}
            {data && <span className="value">{data.count}</span>}
        </td>);
    }

    upgrade(type, clazz) {
        let style = 'icon';
        let data = (this.props.state.upgrades || {})[clazz];
        let innerHtml = '';

        // whether the icon is disabled or not is determined solely by the enabled flag
        if (!data || !data.enabled) {
            style = `${style} disabled`;
        }

        // researches are also upgrades
        if (type === 'upgrade') {
            style = `${style} upgrade u-${clazz}`;

            // level == 0 - no upgrade, > 0 - level of upgrade
            // level for researches is always -1 and is ignored
            // we agree that it's always sent. the defulat of 0 is here for convenience
            let upgradeLevel = (data && data.level) ? data.level : 0;
            style = `${style} level${upgradeLevel}`;
        } else if (type === 'building') {
            style = `${style} building b-${clazz}`;

            // quantity = number of buildings of that type currently on the map
            if (data && data.quantity && data.quantity > 1) {
                innerHtml += `<span class='icon-text-layer'>${data.quantity}</span>`
            }
        } else if (type === 'research') {
            style = `${style} research r-${clazz}`;
        }

        // state in ('', 'present', 'incomplete', 'unpowered')
        let parentTdClass = null;
        if (data && data.state !== null && data.state !== '' && data.state !== 'present') {
            parentTdClass = `state-${data.state}`;
        }

        // apply accumulated style to the icon div.
        // we used to apply it to the td, but that meant the filter in .disabled/unpowered would affect everything inside it
        // whereas it should only affect the icon
        innerHtml = `<div class="${style}"></div>${innerHtml}`;

        return (<td className={parentTdClass} key={clazz} dangerouslySetInnerHTML={{__html: innerHtml}}/>);
    }

    buildings(...args) {
        return (args.map((name) => (this.upgrade('building', name))));
    }

    upgrades(...args) {
        return (args.map((name) => (this.upgrade('upgrade', name))));
    }

    researches(...args) {
        return (args.map((name) => (this.upgrade('research', name))));
    }
}
