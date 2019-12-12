import React, {Component} from 'react';
import './style/entrypoint.scss';
import $ from 'jquery';

import {OverlayPanel} from './OverlayPanel';
import {LeaderBoards} from './LeaderBoards';
import {DefaultData} from './DefaultData';

const MAX_EVENTS = 5;
const EVENT_LIFETIME = 500;

class App extends Component {
    constructor(props) {
        super(props);
        let defaults = new DefaultData();
        this.state = defaults.empty;
        // this.state = defaults.debugLeaderboards;
        this.state = defaults.debug;
        this.eventSource = new EventSource('http://localhost:8082/persist');
        this.lastChatMessage = null;
        // window.setInterval(() => this.pushData({text: 'this.eventSource = new EventSource(\'http://localhost:8082/persist\');'}), 2000);

        var app = this;
        var counter = 0;
        window.setInterval(function() { 
            app.pushInGameEvents(['message ' + ++counter]);
        }, 1000);
        window.setInterval(function() { 
            app.pushInGameEvents(['message ' + ++counter]);
        }, 5000);
    }
	
    pushInGameEvents(newEvents) {
        let time = new Date().getTime();
        
        var logElement = $('.in-game-events-widget > .log');
        // "move" all current events to the old-log component which is never re-rendered. 
        // this way we save and handle them with jQuery below without React messing with them
        this.state.events.map(item => $('<div/>').addClass("event").attr('data', item.time).html(item.body).appendTo(logElement));
        
        // only keep so many events in the old log (remove excess old elements which still didn't fade out)
        var currentlyInTheLogUI = logElement.find('.event');
        var remainingSlotsForOldEvents = Math.max(MAX_EVENTS - newEvents.length, 0);
        var excessOldEvents = Math.max(0, currentlyInTheLogUI.length - remainingSlotsForOldEvents);
        currentlyInTheLogUI.slice(0, excessOldEvents).remove();
        
        let updatedEvents = [];
        newEvents.map(item => updatedEvents.push({body: item, time: time}));        
        let remainingSlotsForNewEvents = Math.min(newEvents.length, MAX_EVENTS);
        let currentEvents = updatedEvents.slice(Math.max(updatedEvents.length - remainingSlotsForNewEvents, 0));
        
        this.setState(Object.assign(this.state, {events: currentEvents}));
        console.log(currentEvents)
    };
	
    componentDidMount() {
        const app = this;

        this.startUpdatingInGameEventsLog();

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

    startUpdatingInGameEventsLog() {
        window.setInterval(function() {
            let time = new Date().getTime();
            $('.in-game-events-widget > .log > .event').each(function() {
                let eventTime = parseInt($(this).attr('data'));
                if (time - eventTime > EVENT_LIFETIME) {
                    console.log(time);
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
