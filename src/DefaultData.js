export class DefaultData {
    constructor() {
        const u = '-';
        this.stats = {apm: u, players: u, gamesWon: u, gamesLost: u, aiLevel: 'Unknown'};
        this.empty = {
            mode: 'full',
            stats: this.stats,
            data: [{text: 'Chat'}],
            playerStats: {
                topUnitsKilled: [{}, {}, {}, {}, {}],
                resourcesSpent: [{}, {}, {}, {}, {}],
                resourcesMined: [{}, {}, {}, {}, {}],
            },
            upgrades: {},
            topDonations: {
                enabled: false
            },
            attentionBanner: {text: '', enabled: false},
            creepingLine: {text: '', enabled: false}
        };
        // noinspection JSUnusedGlobalSymbols
        this.debug = {
            mode: 'compact',
            stats: this.stats,
            data: [{text: 'Chat'}],
            playerStats: {
                topUnitsKilled: [{name: 'super long playername', count: 140}, {
                    name: 'super long playername',
                    count: 140
                }, {name: 'super long playername', count: 140}, {
                    name: 'superlongplayername',
                    count: 140
                }, {name: 'superlongplayername', count: 140}],
                resourcesSpent: [{name: 'super long player name', count: 150}],
                resourcesMined: [{name: 'super long player name', count: 160}, {
                    name: 'super long player name',
                    count: 160
                }],
            },
            upgrades: {
                gate: {enabled: true},
                colossus: {enabled: true}
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
                text: 'Today is a no cheese day. Whoever builds a cannon before 10th minute will get fucked. Latest subscriber: cannonrusher1917',
                enabled: true
            }
        };
    }
}
