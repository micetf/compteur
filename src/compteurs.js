const MILLIARDS = {
    name: "milliards",
    digits: {
        byId: {
            C: {
                position: "C",
                name: "C",
                text: "une centaine de milliards",
                coef: 11,
            },
            D: {
                position: "D",
                name: "D",
                text: "une dizaine de milliards",
                coef: 10,
            },
            U: {
                position: "U",
                name: "U",
                text: "une unité de milliard",
                coef: 9,
            },
        },
        allIds: ["C", "D", "U"],
    },
};

const MILLIONS = {
    name: "millions",
    digits: {
        byId: {
            C: {
                position: "C",
                name: "C",
                text: "une centaine de millions",
                coef: 8,
            },
            D: {
                position: "D",
                name: "D",
                text: "une dizaine de millions",
                coef: 7,
            },
            U: {
                position: "U",
                name: "U",
                text: "une unité de million",
                coef: 6,
            },
        },
        allIds: ["C", "D", "U"],
    },
};

const MILLIERS = {
    name: "milliers",
    digits: {
        byId: {
            C: {
                position: "C",
                name: "C",
                text: "une centaine de milliers",
                coef: 5,
            },
            D: {
                position: "D",
                name: "D",
                text: "une dizaine de milliers",
                coef: 4,
            },
            U: {
                position: "U",
                name: "U",
                text: "une unité de millier",
                coef: 3,
            },
        },
        allIds: ["C", "D", "U"],
    },
};

const UNITES = {
    name: "unités",
    digits: {
        byId: {
            C: {
                position: "C",
                name: "C",
                text: "une centaine d'unités",
                coef: 2,
            },
            D: {
                position: "D",
                name: "D",
                text: "une dizaine d'unités",
                coef: 1,
            },
            U: {
                position: "U",
                name: "U",
                text: "une unité",
                coef: 0,
            },
        },
        allIds: ["C", "D", "U"],
    },
};

const PARTIE_DECIMALE = {
    name: "partie décimale",
    digits: {
        byId: {
            C: {
                position: "C",
                name: "dixieme",
                text: "un dixième",
                coef: -1,
            },
            D: {
                position: "D",
                name: "centieme",
                text: "un centième",
                coef: -2,
            },
            U: {
                position: "U",
                name: "millieme",
                text: "un millième",
                coef: -3,
            },
        },
        allIds: ["C", "D", "U"],
    },
};

const COMA = { name: "coma", text: "," };

const compteurs = {
    byId: {
        milliards: {
            id: "milliards",
            name: "milliards",
            hash: "#milliards",
            max: Math.pow(10, 12),
            classes: [MILLIARDS, MILLIONS, MILLIERS, UNITES],
        },
        millions: {
            id: "millions",
            name: "millions",
            hash: "#millions",
            max: Math.pow(10, 9),
            classes: [MILLIONS, MILLIERS, UNITES],
        },
        milliers: {
            id: "milliers",
            name: "milliers",
            hash: "#milliers",
            determinant: "de",
            max: Math.pow(10, 6),
            classes: [MILLIERS, UNITES],
        },
        unites: {
            id: "unites",
            name: "unités",
            hash: "#unites",
            max: Math.pow(10, 3),
            classes: [UNITES],
        },
        decimaux: {
            id: "decimaux",
            name: "partie décimale",
            hash: "#decimaux",
            max: Math.pow(10, 3),
            classes: [UNITES, COMA, PARTIE_DECIMALE],
        },
    },
    allIds: ["milliards", "millions", "milliers", "unites", "decimaux"],
};

export default compteurs;
