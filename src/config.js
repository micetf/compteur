const MILLIARDS = {
    label: "milliards",
    chiffres: [
        {
            label: "C",
            info: " une centaine de milliards",
            coef: 2 + 9,
        },
        {
            label: "D",
            info: " une dizaine de milliards",
            coef: 1 + 9,
        },
        {
            label: "U",
            info: " une unité de milliards",
            coef: 9,
        },
    ],
};
const MILLIONS = {
    label: "millions",
    chiffres: [
        {
            label: "C",
            info: " une centaine de millions",
            coef: 2 + 6,
        },
        {
            label: "D",
            info: " une dizaine de millions",
            coef: 1 + 6,
        },
        {
            label: "U",
            info: " une unité de million",
            coef: 6,
        },
    ],
};
const MILLIERS = {
    label: "milliers",
    chiffres: [
        {
            label: "C",
            info: " une centaine de milliers",
            coef: 2 + 3,
        },
        {
            label: "D",
            info: " une dizaine de milliers",
            coef: 1 + 3,
        },
        {
            label: "U",
            info: " une unité de millier",
            coef: 3,
        },
    ],
};
const UNITES = {
    label: "unités",
    chiffres: [
        {
            label: "C",
            info: " une centaine d'unités",
            coef: 2,
        },
        {
            label: "D",
            info: " une dizaine d'unités",
            coef: 1,
        },
        {
            label: "U",
            info: " une unité",
            coef: 0,
        },
    ],
};
const PARTIE_DECIMALE = {
    label: "partie décimale",
    chiffres: [
        {
            color: "C",
            label: "1/10",
            info: " un dixième",
            coef: -1,
        },
        {
            color: "D",
            label: "1/100",
            info: " un centième",
            coef: -2,
        },
        {
            color: "U",
            label: "1/1000",
            info: " un millième",
            coef: -3,
        },
    ],
};
export default {
    byId: {
        milliards: {
            hash: "#milliards",
            label: "milliards",
            max: Math.pow(10, 12),
            classes: [MILLIARDS, MILLIONS, MILLIERS, UNITES],
        },
        millions: {
            hash: "#millions",
            label: "millions",
            max: Math.pow(10, 9),
            classes: [MILLIONS, MILLIERS, UNITES],
        },
        milliers: {
            hash: "#milliers",
            label: "milliers",
            max: Math.pow(10, 6),
            classes: [MILLIERS, UNITES],
        },
        unites: {
            hash: "#unites",
            label: "unités",
            max: Math.pow(10, 3),
            classes: [UNITES],
        },
        decimaux: {
            hash: "#decimaux",
            label: "partie décimale",
            max: Math.pow(10, 3),
            classes: [
                UNITES,
                { label: "coma", chiffres: [{ label: "," }] },
                PARTIE_DECIMALE,
            ],
        },
    },
    allIds: ["milliards", "millions", "milliers", "unites", "decimaux"],
};
