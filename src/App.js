import React, {Component} from 'react';
import './App.scss';

// import {getInitialData} from './DataProvider';

class App extends Component {
    constructor(props) {
        super(props);
        const u = '-';
        this.state = {
            mode: 'full',
            stats: {apm: u, players: u, gamesWon: u, gamesLost: u,},
            data: [{text: 'Chat'}]
        };
        this.eventSource = new EventSource('http://localhost:8082/persist');
        this.lastChatMessage = null;
        // window.setInterval(() => this.pushData({text: 'this.eventSource = new EventSource(\'http://localhost:8082/persist\');'}), 2000);
    }

    pushData(added) {
        let oldData = this.state.data;
        let data = oldData.slice(Math.max(oldData.length - 100, 0));
        console.log(data);
        data.push(added);
        this.setState(Object.assign(this.state, {data: data}));
    };

    componentDidMount() {
        const app = this;

        this.eventSource.onmessage = (e) => {
            let payload = JSON.parse(e.data);
            switch (payload['command'] || 'whatever') {
                case 'chatMessage':
                    let msg = payload['message'];
                    app.pushData({text: msg['author'] + ': ' + msg['text']});
                    break;
                case 'update':
                    app.setState(Object.assign(app.state, payload));
                    break;
                default:
                    console.log('pong');
            }
        };
    }

    componentDidUpdate() {
        if (this.lastChatMessage) {
            this.lastChatMessage.scrollIntoView({behavior: "smooth"});
        }
    }

    render() {
        let app = this;
        return (
            <div className="App">
                {{
                    compact: <div className="in-game-overlay">
                        <div className="left-panel">
                            <div className="stats">
                                <div className="players">
                                    <div className="item">
                                        Players {app.state.stats.players}
                                    </div>
                                    <div className="item">
                                        APM {app.state.stats.apm}
                                    </div>
                                </div>
                                <div className="games">
                                    <div className="item">
                                        Games won {app.state.stats.gamesWon}, lost {app.state.stats.gamesLost}
                                    </div>
                                </div>
                            </div>
                            <div className="rtfm">
                                NOTE: If !$ or !money does not work for you,<br/>
                                try following the channel and refreshing the page
                            </div>
                        </div>
                        <div className="right-panel chat">{
                            app.state.data.map((item, index) => <div key={index} className="message">
                                {item.text}
                            </div>)
                        }
                            <div className="cursor" ref={(el) => {
                                this.lastChatMessage = el;
                            }}/>
                        </div>
                    </div>,
                    full: <div className="lobby-overlay">
                        <div className="lobby-panel chat">{
                            app.state.data.map((item, index) => <div key={index} className="message">
                                {item.text}
                            </div>)
                        }
                            <div className="cursor" ref={(el) => {
                                this.lastChatMessage = el;
                            }}/>
                        </div>
                    </div>
                }[app.state.mode]}
            </div>
        );
    }
}

export default App;
