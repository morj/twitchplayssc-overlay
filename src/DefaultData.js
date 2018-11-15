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
            mode: 'leaderboards',
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
    }
}
