export class DefaultData {
    constructor() {
        const u = '-';
        this.stats = {apm: u, players: u, gamesWon: u, gamesLost: u, aiLevel: 'Unknown'};
        this.empty = {
            mode: 'compact',
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
                resourcesSpent: [{name: 'super long player name', count: 100050}],
                resourcesMined: [{name: 'super long player name', count: 1600}, {
                    name: 'super long player name',
                    count: 160000
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
                text: 'Would it be possible to change the width attribute in the to portion of the keyframe the width attribute in the to portion of the keyframe',
                enabled: true
            }
        };
    }
}
