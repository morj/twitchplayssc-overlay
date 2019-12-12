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
					<div className="fullmode-game-screen">
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
						</div>	
						
						<div className="game-leaderboard leaderboard">
							{this.renderLocalLeaderboards(state.gameleaderboards)}
						</div>
					</div>	
					<div className="fullmode-xp-leaderboards-screen">
						<div class="xp-leaderboard-top">Leaderboards: XP</div>
						<div className="global-leaderboard leaderboard">
							{this.renderGlobalLeaderboards(state.globalLeaderboards)}
						</div>
					</div>
                </div>
            </div>
        );
    }
	
	renderGlobalLeaderboards(leaderboards)
	{
		return (
			<table class="leaderboards-table global">
				<tr>
					{leaderboards.map((leaderboard) => 
					<th colspan="3">{leaderboard.title + ' '}</th>
					)}
				</tr>
				{[...Array(30)].map((playerPlace, playerIndex) => 
					<tr key={playerIndex + 1}>{
						leaderboards.map((leaderboard) => <>
							{leaderboard.players.length > playerIndex ? (
								<>
										<td class={this.highlightClass(leaderboard.players[playerIndex], 'rank')}>
											{playerIndex + 1}&nbsp;
											(<span className={this.getClimbClass(leaderboard.players[playerIndex].climb)}>{this.climbToString(leaderboard.players[playerIndex].climb)}</span>)
										</td>
										<td class={this.highlightClass(leaderboard.players[playerIndex], 'playerName')} dangerouslySetInnerHTML={{__html: leaderboard.players[playerIndex].name}}>
										</td>
										<td class={'value ' + this.highlightClass(leaderboard.players[playerIndex], '')}>
											{leaderboard.players[playerIndex].value}
										</td>
									</>
								) : (
									<>
										<td class="rank">{playerIndex + 1}</td>
										<td></td>
										<td></td>
									</>
								)}
						</>)
					}</tr>
				)}
			</table>
		);
	}
	
	highlightClass(player, clazz)
	{
		return clazz + (player.highlight ? ' player-highlight' : '');
	}
	
	renderLocalLeaderboards(leaderboards)
	{
		return (
			<table class="leaderboards-table local">
				{this.renderSomeLocalLeaderboards(leaderboards, [0, 1, 2])}
				{this.renderSomeLocalLeaderboards(leaderboards, [3, 4, 5])}
			</table>
		);
	}
	
	renderSomeLocalLeaderboards(leaderboards, indexArray)
	{
		return (
			<>
				<tr>
					{indexArray.map((i) => 
					<th colspan="4">{leaderboards[i].title + ' '}</th>
					)}
				</tr>
				{[...Array(10)].map((playerPlace, playerIndex) => 
					<tr key={playerIndex + 1}>{
						indexArray.map((i) => 
							<>
								<td class="rank">{playerIndex + 1}</td>
								{leaderboards[i].players.length > playerIndex ? (
									<>
										<td class="global-rank">
											#{leaderboards[i].players[playerIndex].globalRank}&nbsp;
											(<span className={this.getClimbClass(leaderboards[i].players[playerIndex].climb)}>{this.climbToString(leaderboards[i].players[playerIndex].climb)}</span>)
										</td>
										<td class="playerName" dangerouslySetInnerHTML={{__html: leaderboards[i].players[playerIndex].name}}></td>
										<td class="value">{leaderboards[i].players[playerIndex].value}</td>
									</>
								) : (
									<>
										<td></td>
										<td></td>
										<td></td>
									</>
								)}
								
							</>
						)
					}</tr>
				)}
			</>
		);
	}
	
	climbToString(climb)
	{
		return (climb > 0 ? '+' : '') + (climb === 0 ? '-' : climb);
	}
	
	getClimbClass(climb)
	{
		return 'climb ' + (climb > 0 ? 'raise' : (climb === 0 ? '' : 'drop'))
	}
}
