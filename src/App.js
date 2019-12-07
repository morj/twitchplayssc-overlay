import React, {Component} from 'react';
import './style/entrypoint.scss';

import {OverlayPanel} from './OverlayPanel';
import {LeaderBoards} from './LeaderBoards';
import {DefaultData} from './DefaultData';

class App extends Component {
    constructor(props) {
        super(props);
        let defaults = new DefaultData();
        this.state = defaults.empty;
        // this.state = defaults.debugLeaderboards;
        // this.state = defaults.debug;
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
                case 'reload':
                    window.location.reload(true);
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
                    compact: <OverlayPanel state={app.state}/>,
                    leaderboards: <LeaderBoards state={app.state}/>,
                    full: <div className="lobby-overlay text-regular">
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
