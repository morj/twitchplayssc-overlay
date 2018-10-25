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
                {state.attentionBanner && state.attentionBanner.enabled &&
                <div className="global-important-message">{state.attentionBanner.text}</div>}
                <div className="main-panel">
                    <div className="left-panel">
                        {state.creepingLine && state.creepingLine.enabled &&
                        <div className="creeping-line">
							<style dangerouslySetInnerHTML={{__html: animationRules }} />
                            <div className="text" style={creepingTextStyle}>{state.creepingLine.text}</div>
                        </div>}
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
                        <div className="rtfm"><span className="text-warn">{state.staticNote.text}</span>
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
                            {this.buildings('gate', 'forge', 'core', 'robo', 'twilight', 'shrine', 'stargate')}
                        </tr>
                        <tr>
                            {this.buildings('robobay', 'archives', 'beacon')}
                            <td className="upgrade-divider"/>
                            {this.upgrades('weapons-ground-1', 'armor-ground-1', 'shields-1')}
                        </tr>
                        <tr>
                            {this.upgrades('warp', 'zealot', 'stalker', 'adept', 'storm', 'colossus', 'dt')}
                        </tr>
                        <tr>
                            {this.upgrades('weapons-air-1', 'armor-air-1', 'obs', 'phoenix', 'prism', 'carrier')}
                            <td/>
                        </tr>
                        </tbody>
                    </table>
                </div>
                {state.topDonations && state.topDonations.enabled && <div className="sub-panel">
                    <div className="text-warn table-title">top donations</div>
                    <table className="sub-table">
                        <tbody>
                        {['month', 'today', 'latest'].map((period, i) => <tr key={i}>
                            <td className="sub-table-key text-header">{period}:</td>
                            <td className="sub-table-value">
                                <span className="donator">{state.topDonations[period].name}</span>
                                <span className="donation-amount text-warn">{state.topDonations[period].amount}</span>
                            </td>
                        </tr>)}
                        </tbody>
                    </table>
                    <div className="text-warn table-footer">thank you for your support!</div>
                </div>}
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
        if (!data || !data.enabled) {
            style = `${style} disabled`;
        }
        if (type === 'upgrade') {
            style = `${style} upgrade u-${clazz}`;
        }
        if (type === 'building') {
            style = `${style} building b-${clazz}`;
        }
        return (<td className={style} key={clazz}/>);
    }

    buildings(...args) {
        return (args.map((name) => (this.upgrade('building', name))));
    }

    upgrades(...args) {
        return (args.map((name) => (this.upgrade('upgrade', name))));
    }
}
