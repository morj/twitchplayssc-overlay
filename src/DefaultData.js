export class DefaultData {
    constructor() {
        const u = '-';
        this.empty = {
            mode: 'compact',
            stats: {apm: u, players: u, gamesWon: u, gamesLost: u, aiLevel: 'Unknown'},
            data: [{text: 'Chat'}],
            playerStats: {
                topUnitsKilled: [{}, {}, {}, {}, {}],
                xpGained: [{}, {}, {}, {}, {}]
            },
            upgrades: {},
            attentionBanner: {text: '', enabled: false},
            creepingLine: {text: 'Join our Discord server to discuss tactics, updates, suggestions and bugs! - RncDm2K - (link is in the description) -', enabled: false},
            gameZeroTime: Math.floor(new Date().getTime() / 1000),
            timer : { now : 0 }
        };
        // noinspection JSUnusedGlobalSymbols
        this.debug = {
            mode: 'compact',
            stats: {apm: 555, players: 555, gamesWon: 1024, gamesLost: 1024, aiLevel: 'Cheater 3'},
            data: [{text: 'Chat'}],
            gameIntro: {
                intro: 'Hot game against',
                opponent: 'Hard AI',
                description: 'Destroy all enemy structures, set yourself on fire and dance a mean round of polka?',
                tip: '<span class="tip">TIP:</span> This is not a game, it\'s a <span class="command">command</span>! What would make you think it\'s a <span class="unit-type">unit-type</span>?'
            },
            playerStats: {
                topUnitsKilled: [{name: 'super long playername', count: 140}, {
                    name: 'super long playername',
                    count: 140000
                }, {name: 'super long playername', count: 140000}, {
                    name: 'superlongplayername',
                    count: 140000
                }, {name: 'superlongplayername', count: 140}],
                xpGained: [{name: 'super long player name', count: 100050}]
            },
            upgrades: {
                gate: {enabled: true, quantity: 21, state: 'unpowered'},
                forge: {enabled: true, quantity: 2, state: 'incomplete'},
                colossus: {enabled: true},
                "weapons-ground": {enabled: true},
                "weapons-air": {enabled: true, level: 2},
                shields: {enabled: true, level: 1},
                stargate: {enabled: false, quantity: 0},
                robobay: {enabled: false},
                robo: {enabled: true, quantity: 2},
                voidray: {enabled: true},
                adept: {enabled: false},
                zealot: {enabled: true, level: -1},
                stalker: {enabled: true, level: 1}
            },
            attentionBanner: {
                text: 'Maeror Tri was an ambient, noise and drone music band from Germany',
                enabled: true
            },
            creepingLine: {
                text: 'Would it be possible to change the width <span style="color: red;">attribute in the to portion</span> of the keyframe the width attribute in the to portion of the keyframe',
                enabled: true
            },
            gameZeroTime: Math.floor(new Date().getTime() / 1000),
            timer : { now : 5 }
        };
		
		let someLocalLeaderBoard = {
			title: 'XP',
			players: [
				{name: '<span class="league-inline master"></span>   <p>    superlo ngplayeasd asdasdasdasdrname8</p>       <span class="league-inline medal ap31sin">    </span>    <span  class="league-inline medal nutella">     </span>   <span class="league-inline medal horsie"> </span>', value: 999999, climb: 99, globalRank: 99},
				{name: '<span class="league-inline silver"></span><p>naturalhomemadenutella</p><span class="league-inline medal horsie"></span><span class="league-inline medal horsie"></span><span class="league-inline medal horsie"></span>', value: 111111, climb: 0, globalRank: 99},
				{name: '<span class="league-inline bronze"></span><p>supe rlongplayername3</p>', value: 23, climb: 10, globalRank: 3},
				{name: '<span style="color: red;"><p>superlongplayername4</p></span>', value: 23, climb: -2, globalRank: 1},
				{name: '<span class="league-inline gold"></span><p>sup erlongplayername5</p>', value: 23, climb: 0, globalRank: 3},
				{name: '<span class="league-inline grandmaster"></span><p>superlongplayername6</p>', value: 23, climb: 1, globalRank: 4},
				{name: '<span class="league-inline diamond"></span><p>superlonasdasdasdgplayername7</p><span class="league-inline medal"></span>', value: 23, climb: -1, globalRank: 5},
				{name: '<span class="league-inline platinum"></span><p>superlongplayeasdasdasdasdasdrname8</p><span class="league-inline medal"></span><span class="league-inline medal"></span>', value: 23, climb: 0, globalRank: 7},
				{name: '<p>superlongplayername9</p>', value: 23, climb: 2, globalRank: 10},
				{name: '<p>superlongplayernasdfasdfasdfasdfame10</p><span class="league-inline medal nutella"></span><span class="league-inline medal top10"></span><span class="league-inline medal forge"></span>', value: 23, climb: 0, globalRank: 34}
			]
		};
		
		let someGlobalLeaderBoard = {
			title: 'Last week',
			players: [
				{name: '<span class="league-inline grandmaster"></span> <p>naturalhomemadenutella </p><span class="league-inline medal nutella"> </span> <span class="league-inline medal survival"> </span> <span class="league-inline medal top10"></span>', value: 9999999, climb: 100, globalRank: 300, highlight: true},
				{name: '<span class="league-inline master"></span> superlongplayername2<span class="league-inline medal horsie"></span>', value: 111111, climb: 100, globalRank: 300, highlight: true},
				{name: '<span class="league-inline master"></span> superlongplayername2<span class="league-inline medal horsie"></span>', value: 111111, climb: 100, globalRank: 300, highlight: true},
				{name: '<span class="league-inline master"></span> superlongplayername2<span class="league-inline medal horsie"></span>', value: 111111, climb: 100, globalRank: 300, highlight: true},
				{name: '<span class="league-inline master"></span> supeerlongplayername2<span class="league-inline medal horsie"></span>', value: 111111, climb: 100, globalRank: 300, highlight: true},
				{name: '<span class="league-inline master"></span> superlongplayername2<span class="league-inline medal horsie"></span>', value: 111111, climb: 100, globalRank: 300, highlight: true},
				{name: '<span class="league-inline master"></span> superlongplayername2<span class="league-inline medal horsie"></span>', value: 111111, climb: 100, globalRank: 300, highlight: true},
				{name: '<span class="league-inline master"></span> superlongplayername2<span class="league-inline medal horsie"></span>', value: 111111, climb: 100, globalRank: 300, highlight: true},
				{name: '<span class="league-inline master"></span> superlongplayername2<span class="league-inline medal horsie"></span>', value: 111111, climb: 100, globalRank: 300, highlight: true},
				{name: '<span class="league-inline master"></span> superlong<span class="league-inline medal horsie"></span>', value: 1, climb: 100, globalRank: 300, highlight: true},
				{name: '<span class="league-inline master"></span> <p>superlongplasdfasdfasdfasdfayername2</p><span class="league-inline medal horsie"></span><span class="league-inline medal horsie"></span><span class="league-inline medal horsie"></span>', value: 111111, climb: 100, globalRank: 300, highlight: true},
				{name: '<span class="league-inline master"></span><p>superlongplayername2</p><span class="league-inline medal horsie"></span>', value: 111111, climb: 100, globalRank: 300, highlight: true},
				{name: '<span class="league-inline master"></span> superlongplayername2<span class="league-inline medal horsie"></span>', value: 111111, climb: 100, globalRank: 300, highlight: true},
				{name: '<span class="league-inline master"></span> superlongplayername2<span class="league-inline medal horsie"></span>', value: 111111, climb: 100, globalRank: 300, highlight: true},
				{name: '<span class="league-inline master"></span> superlongplayername2<span class="league-inline medal horsie"></span>', value: 111111, climb: 100, globalRank: 300, highlight: true},
				{name: '<span class="league-inline master"></span> superlongplayername2<span class="league-inline medal horsie"></span>', value: 111111, climb: 100, globalRank: 300, highlight: true},
				{name: '<span class="league-inline master"></span> superlongplayername2<span class="league-inline medal horsie"></span>', value: 111111, climb: 100, globalRank: 300, highlight: true},
				{name: '<span class="league-inline master"></span> superlongplayername2<span class="league-inline medal horsie"></span>', value: 111111, climb: 100, globalRank: 300, highlight: true},
				{name: '<span class="league-inline master"></span> superlongplayername2<span class="league-inline medal horsie"></span>', value: 111111, climb: 100, globalRank: 300, highlight: true},
				{name: '<span class="league-inline master"></span> superlongplayername2<span class="league-inline medal horsie"></span>', value: 111111, climb: 100, globalRank: 300, highlight: true},
				{name: '<span class="league-inline master"></span> superlongplayername2<span class="league-inline medal horsie"></span>', value: 111111, climb: 100, globalRank: 300, highlight: true},
				{name: '<span class="league-inline master"></span> superlongplayername2<span class="league-inline medal horsie"></span>', value: 111111, climb: 100, globalRank: 300, highlight: true},
				{name: '<span class="league-inline master"></span> superlongplayername2<span class="league-inline medal horsie"></span>', value: 111111, climb: 100, globalRank: 300, highlight: true},
				{name: '<span class="league-inline master"></span> naturalhomemadenutella<span class="league-inline medal horsie"></span>', value: 111111, climb: 100, globalRank: 300, highlight: true},
				{name: '<span class="league-inline master"></span> superlongplayername2<span class="league-inline medal horsie"></span>', value: 111111, climb: 100, globalRank: 300, highlight: true},
				{name: '<span class="league-inline master"></span> superlongplayername2<span class="league-inline medal horsie"></span>', value: 111111, climb: 10, globalRank: 30, highlight: true},
				{name: '<span class="league-inline master"></span><p>ap31sin</p><span class="league-inline medal forge"></span>', value: 111111, climb: 10, globalRank: 30, highlight: true},
				{name: '<span class="league-inline master"></span><p>ap31sin</p><span class="league-inline medal forge"></span><span class="league-inline medal survival"></span>', value: 111111, climb: 10, globalRank: 30, highlight: true},
				{name: '<span class="league-inline master"></span> superlongplayername2<span class="league-inline medal horsie"></span>', value: 111111, climb: 10, globalRank: 30, highlight: true},
				{name: '<span class="league-inline master"></span><p>naturalhomemadenutella</p><span class="league-inline medal horsie"></span><span class="league-inline medal horsie"></span><span class="league-inline medal horsie"></span>', value: 111111, climb: 10, globalRank: 3, highlight: true}
				
			]
		};
		/*
        for (var i = 0; i < 30; i++) {
            someGlobalLeaderBoard.players[i] = {name: '<span class="league-inline master"></span><p>naturalhomemadenutella</p><span class="league-inline medal horsie"></span><span class="league-inline medal horsie"></span><span class="league-inline medal horsie"></span>', value: 111111, climb: 10, globalRank: 3, highlight: true};
        }*/
            
		let someLocalLeaderBoard2 = JSON.parse(JSON.stringify(someLocalLeaderBoard)); // cloned
		someLocalLeaderBoard2.players[0].value = 999999;
		
		this.debugLeaderboards = {
            mode: 'leaderboards',
			data: [{text: 'Chat'}], /* kill me */
			game: {
				result: 'victory',
				map: 'Amazing Map',
				opponent: 'Cheater 3',
				duration: '123 min 15 sec'
			},
			mvp: {
				player: '<span class="league-inline master"></span> Tinydick',
				mined: {
					minerals: 51234,
					gas: 12389
				},
				killed: {
					units: 69,
					workers: 12
				}
			},
			gameleaderboards: [
				someLocalLeaderBoard,
				someLocalLeaderBoard2,
				someLocalLeaderBoard2,
				someLocalLeaderBoard,
				someLocalLeaderBoard,
				someLocalLeaderBoard2
			],
			globalLeaderboards: [
				someGlobalLeaderBoard,
				someGlobalLeaderBoard,
				someGlobalLeaderBoard
			]
        };
    }
}
