import React, {Component} from 'react';
import './style/entrypoint.scss';
import $ from 'jquery';

import {OverlayPanel} from './OverlayPanel';
import {LeaderBoards} from './LeaderBoards';
import {DefaultData} from './DefaultData';

const MAX_EVENTS = 5;
const EVENT_LIFETIME = 10000;

function hhmmss(sec_num) {
    let secAbs = Math.abs(sec_num);
    var hours   = Math.floor(secAbs / 3600);
    var minutes = Math.floor((secAbs - (hours * 3600)) / 60);
    var seconds = secAbs - (hours * 3600) - (minutes * 60);

    if (sec_num < 0) {hours = "-"+hours}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}

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

        // this.testEvents();
    }
	
    testEvents() {
        var app = this;
        var counter = 0;
        window.setInterval(() => app.pushInGameEvents(['<span class="player-name">naturalhomemadenutella</span> has been awarded <span class="achievement-name">I Drink your Milkshake</span>']), 4000);
        window.setInterval(() => app.pushInGameEvents(['Test text <span class="player-name">PLAasdasdYERahorseinahospital</span> has joined the game ' + ++counter]), 5000);
    }
    
    pushInGameEvents(newEvents) {
        let time = new Date().getTime();
        
        var logElement = $('.in-game-events-widget > .log');
        
        
        newEvents.map(item => $('<div/>').addClass("event").addClass("event-slide-x").attr('data', time).html(item).appendTo(logElement));
        
        var allEvents = logElement.find('.event');
        var excessElements = Math.max(allEvents.length - MAX_EVENTS, 0);
        allEvents.slice(0, excessElements).remove();  // if we reached MAX_EVENTS, remove old events which still haven't faded out
    };
	
    componentDidMount() {
        const app = this;

        this.startUpdatingInGameEventsLog();
        this.startUpdatingInGameClock();

        this.eventSource.onmessage = (e) => {
            let payload = JSON.parse(e.data);
            switch (payload['command'] || 'whatever') {
                case 'update':
                    app.setState(Object.assign(app.state, payload));
                    break;
                case 'reload':
                    window.location.reload(true);
                    break;
                case 'inGameEvents':
                    app.pushInGameEvents(payload['events']);    
                    break;
                default:
                    console.log('pong');
            }
        };
    }

    startUpdatingInGameClock() {
        window.setInterval(function() {
            let timeSeconds = Math.floor(new Date().getTime() / 1000);
            let secondsPassed = timeSeconds - parseInt($('.zero-time').val());
            $('.game-timer').text(hhmmss(secondsPassed)).toggleClass('negative', secondsPassed < 0)
                .toggleClass('almost-positive', secondsPassed > -30 && secondsPassed < 1);
            
        }, 200);
    }
    
    startUpdatingInGameEventsLog() {
        window.setInterval(function() {
            let time = new Date().getTime();
            $('.in-game-events-widget > .log > .event').each(function() {
                let eventTime = parseInt($(this).attr('data'));
                if (time - eventTime > EVENT_LIFETIME) {
                    $(this).fadeOut(1000, function() { if ($(this).parent().length > 0) $(this).remove(); });
                }
            });
        }, 200);
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
