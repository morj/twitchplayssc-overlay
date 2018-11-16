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
                        <span className="gamestat result win">VICTORY</span>
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
                            killed — <span className="achievement-icon cup"/>
                            <span className="achievement-icon cup"/>
                        </div>
					</div>	
					
                    <div className="fullmode-leaderboards">
						{this.renderLeaderboards(state.leaderboards)}
                    </div>
                </div>
            </div>
        );
    }
	
	renderLeaderboards(leaderboards)
	{
		return (
			<table class="local-leaderboard">
				{this.renderSomeLeaderboards(leaderboards, [0, 1, 2, 3])}
				{this.renderSomeLeaderboards(leaderboards, [4, 5, 6, 7])}
			</table>
		);
	}
	
	renderSomeLeaderboards(leaderboards, indexArray)
	{
		return (
			<>
				<tr>
					{indexArray.map((i) => 
						<th colspan="3">{leaderboards[i].title}</th>
					)}
				</tr>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((playerPlace, playerIndex) => 
					<tr key={playerIndex}>{
						indexArray.map((i) => <>
							<td>{playerPlace}</td>
							<td>{leaderboards[i].players[playerIndex].name}</td>
							<td>{leaderboards[i].players[playerIndex].value}</td>
						</>)
					}</tr>
				)}
			</>
		);
	}
}
