import React, {Component} from 'react';

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
        // window.setInterval(() => this.pushData({text: 'xxxxxx'}), 2000);
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
            <div className="App" style={{width: '100%', height: '100%', color: 'white'}}>
                {{
                    compact: <div style={{
                        position: 'absolute', left: 363, right: 407, top: 872, bottom: 11, background: 'black'
                    }}>
                        <div style={{
                            float: 'left', width: '60%', height: '100%', lineHeight: '32px', marginTop: 12, marginLeft: 12,
                        }}>
                            <div style={{width: '100%', height: '50%'}}>
                                <div style={{height: '50%', width: '20%', float: 'left', fontSize: 30}}>
                                    <div style={{marginBottom: 8}}>
                                        Players {app.state.stats.players}
                                    </div>
                                    <div style={{marginBottom: 8}}>
                                        APM {app.state.stats.apm}
                                    </div>
                                </div>
                                <div style={{height: '50%', width: '60%', float: 'right', fontSize: 30}}>
                                    <div style={{marginBottom: 8}}>
                                        Games won {app.state.stats.gamesWon}, lost {app.state.stats.gamesLost}
                                    </div>
                                </div>
                            </div>
                            <div style={{width: '100%', height: '50%', fontSize: 26, color: 'orange'}}>
                                NOTE: If !$ or !money does not work for you,<br/>try following the channel and refreshing the page
                            </div>
                        </div>
                        <div style={{
                            float: 'right', height: '100%', width: '35%', overflow: 'auto', marginTop: 12
                        }}>{
                            app.state.data.map((item, index) => <div
                                key={index}
                                style={{paddingBottom: 4}}>
                                {item.text}
                            </div>)
                        }
                            <div style={{
                                paddingTop: 1, height: 1, width: 10, float: 'right', clear: 'both', background: 'white'
                            }}
                                 ref={(el) => {
                                     this.lastChatMessage = el;
                                 }}>
                            </div>
                        </div>
                    </div>,
                    full: <div style={{
                        position: 'absolute', width: '100%', height: '100%', background: `rgba(0, 0, 0, 0.5)`
                    }}>
                        <div style={{
                            float: 'right',
                            height: '100%',
                            width: '100%',
                            overflow: 'auto',
                            marginTop: 4
                        }}>{
                            app.state.data.map((item, index) => <div
                                key={index}
                                style={{paddingTop: 2, paddingBottom: 2}}>
                                {item.text}
                            </div>)
                        }
                            <div style={{
                                paddingTop: 1, height: 1, width: 10, float: 'right', clear: 'both', background: 'white'
                            }}
                                 ref={(el) => {
                                     this.lastChatMessage = el;
                                 }}>
                            </div>
                        </div>
                    </div>
                }[app.state.mode]}
            </div>
        );
    }
}

export default App;
