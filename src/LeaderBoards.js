import React, {Component} from 'react';

export class LeaderBoards extends Component {
    /*constructor(props) {
        super(props);
        this.lastChatMessage = null;
    }*/

    // TODO: componentDidUpdate

    render() {
        // const state = this.props.state;

        return (
            <div className="adjust-me-overlay text-regular">
                <div className="fullmode-container">

                    <div className="fullmode-gamestats">
                        <span className="gamestat map">Amazing Map</span> — <span className="gamestat ailevel">Cheater 3</span> — 
                        <span className="gamestat duration">10500 min</span>
                        <span className="gamestat result win">VICTORY</span>
                    </div>

                    <div className="mvp-container">
                        <div>
							<div className="mvp-header">
								<span className="achievement-icon cup"/>
								<span className="mvp">MVP:</span>
								<span className="playername">Tinydick</span>
								<span className="achievement-icon cup"/>
							</div>
                            <div className="mvp-stats">
                                <span className="mvpstat">69</span> units killed — <span
                                className="mvpstat">51234</span> minerals,
                                <span className="mvpstat">12389</span> gas mined — <span
                                className="mvpstat">12</span> workers
                                killed — <span className="achievement-icon cup"/>
                                <span className="achievement-icon cup"/>
                            </div>

                            <div className="fullmode-leaderboards">
								<table class="local-leaderboard">
									<tr>
										<th colspan="3">Stat 1</th>
										<th colspan="3">Stat 2</th>
										<th colspan="3">Stat 3</th>
										<th colspan="3">Stat 4</th>
										
									</tr>
									{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => <tr key={i}>
										<td>{i}</td>
										<td>superlongplayername</td>
										<td>100500</td>
											
										<td>{i}</td>
										<td>superlongplayername</td>
										<td>100500</td>
										
										<td>{i}</td>
										<td>superlongplayername</td>
										<td>100500</td>
										
										<td>{i}</td>
										<td>superlongplayername</td>
										<td>100500</td>
									</tr>)}
									<tr>
										<th colspan="3">Stat 1</th>
										<th colspan="3">Stat 2</th>
										<th colspan="3">Stat 3</th>
										<th colspan="3">Stat 4</th>
										
									</tr>
									{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => <tr key={i}>
										<td>{i}</td>
										<td>superlongplayername</td>
										<td>100500</td>
											
										<td>{i}</td>
										<td>superlongplayername</td>
										<td>100500</td>
										
										<td>{i}</td>
										<td>superlongplayername</td>
										<td>100500</td>
										
										<td>{i}</td>
										<td>superlongplayername</td>
										<td>100500</td>
									</tr>)}
								</table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
