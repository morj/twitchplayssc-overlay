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
            topDonations: {
                enabled: false
            },
            attentionBanner: {text: '', enabled: false},
            creepingLine: {text: '', enabled: false},
            staticNote: {text: 'NOTE: If !$ or !money does not work for you, try following the channel and refreshing the page'}
        };
        // noinspection JSUnusedGlobalSymbols
        this.debug = {
            mode: 'compact',
            stats: {apm: 555, players: 555, gamesWon: 1024, gamesLost: 1024, aiLevel: 'Cheater 3'},
            data: [{text: 'Chat'}],
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
                adept: {enabled: false},
                zealot: {enabled: true, level: -1},
                stalker: {enabled: true, level: 1}
            },
            topDonations: {
                enabled: true,
                month: {name: 'TinyDick', amount: '$234'},
                today: {name: 'YourMomma69', amount: '$239'},
                latest: {name: 'Make Parmesan Great Again', amount: '$23'}
            },
            attentionBanner: {
                text: 'Maeror Tri was an ambient, noise and drone music band from Germany',
                enabled: true
            },
            creepingLine: {
                text: 'Would it be possible to change the width <span style="color: red;">attribute in the to portion</span> of the keyframe the width attribute in the to portion of the keyframe',
                enabled: true
            },
            staticNote: {
                text: 'NOTE: If !$ or !money does not work for you, try following the channel and refreshing the page'
            }
        };
		
		let exampleLeaderBoard = {
			title: 'XP',
			players: [
				{name: 'superlongplayername1', value: 100500},
				{name: 'superlongplayername2', value: 23},
				{name: 'superlongplayername3', value: 23},
				{name: 'superlongplayername4', value: 23},
				{name: 'superlongplayername5', value: 23},
				{name: 'superlongplayername6', value: 23},
				{name: 'superlongplayername7', value: 23},
				{name: 'superlongplayername8', value: 23},
				{name: 'superlongplayername9', value: 23},
				{name: 'superlongplayername10', value: 23}
			]
		};
		
		let exampleLeaderBoard2 = JSON.parse(JSON.stringify(exampleLeaderBoard)); // cloned
		exampleLeaderBoard2.players[0].value = 111111;
		
		this.debugLeaderboards = {
            mode: 'leaderboards',
			data: [{text: 'Chat'}], /* kill me */
			game: {
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
				exampleLeaderBoard,
				exampleLeaderBoard2,
				exampleLeaderBoard2,
				exampleLeaderBoard,
				exampleLeaderBoard,
				exampleLeaderBoard2,
				exampleLeaderBoard,
				exampleLeaderBoard
			],
			globalLeaderboards: [
				exampleLeaderBoard2,
				exampleLeaderBoard2,
				exampleLeaderBoard2,
				exampleLeaderBoard2,
				exampleLeaderBoard2,
				exampleLeaderBoard2,
				exampleLeaderBoard2,
				exampleLeaderBoard2
			]
        };
    }
}
