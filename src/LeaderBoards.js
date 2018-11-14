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
                        <span className="gamestat date">13/11/2018 17:22:22</span>&nbsp;—&nbsp;<span
                        className="gamestat map">Amazing Map</span>&nbsp;—&nbsp;<span className="gamestat ailevel">Cheater 3</span>&nbsp;—&nbsp;
                        <span
                            className="gamestat duration">10500 min</span>
                        <span className="gamestat result win">VICTORY</span>
                    </div>

                    <div className="fullmode-mvp">
                        <div>
                            <span className="achievement-icon cup"/>
                            <span className="mvp">MVP:</span>
                            <span className="playername">Tinydick</span>
                            <div>
                                <span className="mvpstat">69</span>&nbsp; units killed&nbsp;—&nbsp;<span
                                className="mvpstat">51234</span>&nbsp; minerals,
                                <span className="mvpstat">12389</span>&nbsp; gas mined&nbsp;—&nbsp;<span
                                className="mvpstat">12</span>&nbsp;workers
                                killed&nbsp;—&nbsp;<span className="achievement-icon cup"/>
                                <span className="achievement-icon cup"/>
                            </div>

                            <div className="fullmode-leaderboards">
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
