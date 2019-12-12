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
            creepingLine: {text: '', enabled: false}
        };
        // noinspection JSUnusedGlobalSymbols
        this.debug = {
            mode: 'compact',
            stats: {apm: 555, players: 555, gamesWon: 1024, gamesLost: 1024, aiLevel: 'Cheater 3'},
            data: [{text: 'Chat'}],
            gameIntro: {
                intro: 'Hot game against',
                opponent: 'Hard AI',
                description: 'Destroy all enemy structures, set yourself on fire and dance a mean round of polka?'
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
            }
        };
		
		let someLocalLeaderBoard = {
			title: 'XP',
			players: [
				{name: 'superlo ngplayeasd asdasdasdasdrname8', value: 100500, climb: 2999, globalRank: 3400},
				{name: 'superlongplayername2', value: 111111, climb: 0, globalRank: 1000},
				{name: 'supe rlongplayername3', value: 23, climb: 10, globalRank: 3},
				{name: '<span style="color: red;">superlongplayername4</span>', value: 23, climb: -2, globalRank: 1},
				{name: 'sup erlongplayername5', value: 23, climb: 0, globalRank: 3},
				{name: 'superlongplayername6', value: 23, climb: 1, globalRank: 4},
				{name: 'superlongplayername7', value: 23, climb: -1, globalRank: 5},
				{name: 'superlongplayeasdasdasdasdasdrname8', value: 23, climb: 0, globalRank: 7},
				{name: 'superlongplayername9', value: 23, climb: 2, globalRank: 100},
				{name: 'superlongplayername10', value: 23, climb: 0, globalRank: 34}
			]
		};
		
		let someGlobalLeaderBoard = {
			title: 'Last week',
			players: [
				{name: 'superlo ngplayeasd asdasdasdasdrname8', value: 100500, climb: 10, globalRank: 3},
				{name: 'superlongplayername2', value: 111111, climb: 10, globalRank: 3, highlight: true},
				{name: 'superlongplayername7', value: 23, climb: 10, globalRank: 3},
				{name: 'supe rlongplayername3', value: 23, climb: 0, globalRank: 3},
				{name: 'superlongplayername7', value: 23, climb: 10, globalRank: 3},
				{name: '<span style="color: red;">superlongplayername4</span>', value: 23, climb: 10, globalRank: 3},
				{name: 'superlongplayername7', value: 23, climb: 10, globalRank: 3},
				{name: 'sup erlongplayername5', value: 23, climb: 10, globalRank: 3},
				{name: 'superlongplayername7', value: 23, climb: 10, globalRank: 3, highlight: true},
				{name: 'superlongplayername6', value: 23, climb: 10, globalRank: 3},
				{name: 'superlongplayername7', value: 23, climb: 10, globalRank: 3},
				{name: 'superlongplayername7', value: 23, climb: 10, globalRank: 3},
				{name: 'superlongplayername7', value: 1111111, climb: 10, globalRank: 3},
				{name: 'superlongplayeasdasdasdasdasdrname8', value: 23, climb: 10, globalRank: 3},
				{name: 'superlongplayername9', value: 23, climb: 10, globalRank: 3},
				{name: 'superlongplayername10', value: 23, climb: 10, globalRank: 3}
			]
		};
		
		let someLocalLeaderBoard2 = JSON.parse(JSON.stringify(someLocalLeaderBoard)); // cloned
		someLocalLeaderBoard2.players[0].value = 88888888;
		
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
				player: 'Tinydick',
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
