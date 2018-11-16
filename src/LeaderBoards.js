import React, {Component} from 'react';

export class LeaderBoards extends Component {
    /*constructor(props) {
        super(props);
        this.lastChatMessage = null;
    }*/

    // TODO: componentDidUpdate

    render() {
        const state = this.props.state;

        return (
            <div className="adjust-me-overlay text-regular">
                <div className="fullmode-container">

                    <div className="fullmode-gamestats">
                        <span className="gamestat map">{state.game.map}</span> — <span className="gamestat ailevel">{state.game.opponent}</span> — <span className="gamestat duration">{state.game.duration}</span>
                        <span className="gamestat result win">{state.game.result.toUpperCase()}</span>
                    </div>

                    <div className="mvp-container">
                        <div className="mvp-header">
							<span className="achievement-icon cup"/>
							<span className="mvp">MVP:</span>
							<span className="playername">{state.mvp.player}</span>
							<span className="achievement-icon cup"/>
						</div>
                        <div className="mvp-stats">
                            <span className="mvpstat">{state.mvp.killed.units}</span> units killed — <span
                            className="mvpstat">{state.mvp.mined.minerals}</span> minerals,
                            <span className="mvpstat">{state.mvp.mined.gas}</span> gas mined — <span
                            className="mvpstat">{state.mvp.killed.workers}</span> workers
                            killed
                        </div>
					</div>	
					
                    <div className="fullmode-leaderboards">
						{this.renderLeaderboards(state.gameleaderboards, 'this game')}
						{this.renderLeaderboards(state.globalLeaderboards, 'global')}
                    </div>
                </div>
            </div>
        );
    }
	
	renderLeaderboards(leaderboards, name)
	{
		let tableClass = (name === 'global' ? 'global' : 'local');
		return (
			<table class={"leaderboards-table " + tableClass}>
				{this.renderSomeLeaderboards(leaderboards, [0, 1, 2], name)}
				{this.renderSomeLeaderboards(leaderboards, [3, 4, 5], name)}
			</table>
		);
	}
	
	renderSomeLeaderboards(leaderboards, indexArray, name)
	{
		return (
			<>
				<tr>
					{indexArray.map((i) => 
					<th colspan="4">{leaderboards[i].title + ' '}({name})</th>
					)}
				</tr>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((playerPlace, playerIndex) => 
					<tr key={playerIndex}>{
						indexArray.map((i) => <>
							<td>{playerPlace}</td>
							<td class="global-rank">
								#{leaderboards[i].players[playerIndex].globalRank}&nbsp;
							(<span className={this.getClimbClass(leaderboards[i].players[playerIndex].climb)}>{this.climbToString(leaderboards[i].players[playerIndex].climb)}</span>)</td>
							<td class="playerName">{leaderboards[i].players[playerIndex].name}</td>
							<td>{leaderboards[i].players[playerIndex].value}</td>
						</>)
					}</tr>
				)}
			</>
		);
	}
	
	climbToString(climb)
	{
		return (climb > 0 ? '+' : '') + (climb == 0 ? '-' : climb);
	}
	
	getClimbClass(climb)
	{
		return 'climb ' + (climb > 0 ? 'raise' : (climb == 0 ? '' : 'drop'))
	}
}
