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
								<span className="playername" dangerouslySetInnerHTML={{__html: state.mvp.player}}></span>
								<span className="achievement-icon cup"/>
							</div>
						</div>	
						
						<div className="game-leaderboard leaderboard">
							{this.renderLocalLeaderboards(state.gameleaderboards)}
						</div>
					</div>	
					<div className="fullmode-xp-leaderboards-screen">
						<div className="xp-leaderboard-top">Leaderboards: XP</div>
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
			<table className="leaderboards-table global">
                <colgroup>
                    <col style={{width: '120px'}} />
                    <col style={{width: '380px'}} />
                    <col style={{width: '100px'}} />
                    <col style={{width: '120px'}} />
                    <col style={{width: '380px'}} />
                    <col style={{width: '100px'}} />
                    <col style={{width: '120px'}} />
                    <col style={{width: '380px'}} />
                    <col style={{width: '100px'}} />
                </colgroup>
                <tbody>
				<tr>
					{leaderboards.map((leaderboard) => 
					<th colSpan="3">{leaderboard.title + ' '}</th>
					)}
				</tr>
				{[...Array(30)].map((playerPlace, playerIndex) => 
					<tr key={playerIndex + 1}>{
						leaderboards.map((leaderboard) => <>
							{leaderboard.players.length > playerIndex ? (
								<>
										<td className={this.highlightClass(leaderboard.players[playerIndex], 'rank')}>
											{playerIndex + 1}&nbsp;
											(<span className={this.getClimbClass(leaderboard.players[playerIndex].climb)}>{this.climbToString(leaderboard.players[playerIndex].climb)}</span>)
										</td>
										<td className={this.highlightClass(leaderboard.players[playerIndex], 'playerName')}> <div dangerouslySetInnerHTML={{__html: leaderboard.players[playerIndex].name}}></div>
										</td>
										<td className={'value ' + this.highlightClass(leaderboard.players[playerIndex], '')}>
											{leaderboard.players[playerIndex].value}
										</td>
									</>
								) : (
									<>
										<td className="rank">{playerIndex + 1}</td>
										<td></td>
										<td></td>
									</>
								)}
						</>)
					}</tr>
				)}
                </tbody>
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
			<table className="leaderboards-table local">
                <colgroup>
                    <col style={{width: '30px'}} />
                    <col style={{width: '100px'}} />
                    <col style={{width: '340px'}} />
                    <col style={{width: '90px'}} />
                    <col style={{width: '30px'}} />
                    <col style={{width: '100px'}} />
                    <col style={{width: '340px'}} />
                    <col style={{width: '90px'}} />
                    <col style={{width: '30px'}} />
                    <col style={{width: '100px'}} />
                    <col style={{width: '340px'}} />
                    <col style={{width: '90px'}} />
                </colgroup>
                <tbody>
                {this.renderSomeLocalLeaderboards(leaderboards, [0, 1, 2])}
				{this.renderSomeLocalLeaderboards(leaderboards, [3, 4, 5])}
                </tbody>
			</table>
		);
	}
	
	renderSomeLocalLeaderboards(leaderboards, indexArray)
	{
		return (
			<>
                <tr>
					{indexArray.map((i) => 
					<th colSpan="4">{leaderboards[i].title + ' '}</th>
					)}
				</tr>
				{[...Array(10)].map((playerPlace, playerIndex) => 
					<tr key={playerIndex + 1}>{
						indexArray.map((i) => 
							<>
								<td className="rank">{playerIndex + 1}</td>
								{leaderboards[i].players.length > playerIndex ? (
									<>
										<td className="global-rank">
											#{leaderboards[i].players[playerIndex].globalRank}&nbsp;
											(<span className={this.getClimbClass(leaderboards[i].players[playerIndex].climb)}>{this.climbToString(leaderboards[i].players[playerIndex].climb)}</span>)
										</td>
										<td className="playerName"><div dangerouslySetInnerHTML={{__html: leaderboards[i].players[playerIndex].name}}></div></td>
										<td className="value">{leaderboards[i].players[playerIndex].value}</td>
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
