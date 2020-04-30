import cheveron_right from "./zondicons/cheveron-right.svg";
export const CHEVERON_RIGHT = cheveron_right;
import heart from "./zondicons/heart.svg";
export const HEART = heart;
import envelope from "./zondicons/envelope.svg";
export const ENVELOPE = envelope;
import search from "./zondicons/search.svg";
export const SEARCH = search;
import cheveron_up from "./zondicons/cheveron-up.svg";
export const CHEVERON_UP = cheveron_up;
import cheveron_down from "./zondicons/cheveron-down.svg";
export const CHEVERON_DOWN = cheveron_down;

import centaine from "./compteur/centaine.svg";
export const CENTAINE = centaine;
import dizaine from "./compteur/dizaine.svg";
export const DIZAINE = dizaine;
import unite from "./compteur/unite.svg";
export const UNITE = unite;
import dixieme from "./compteur/dixieme.svg";
export const DIXIEME = dixieme;
import centieme from "./compteur/centieme.svg";
export const CENTIEME = centieme;
import millieme from "./compteur/millieme.svg";
export const MILLIEME = millieme;

import zero from "./compteur/0.svg";
import un from "./compteur/1.svg";
import deux from "./compteur/2.svg";
import trois from "./compteur/3.svg";
import quatre from "./compteur/4.svg";
import cinq from "./compteur/5.svg";
import six from "./compteur/6.svg";
import sept from "./compteur/7.svg";
import huit from "./compteur/8.svg";
import neuf from "./compteur/9.svg";

export const CHIFFRES = [
    zero,
    un,
    deux,
    trois,
    quatre,
    cinq,
    six,
    sept,
    huit,
    neuf,
];

import coma from "./compteur/coma.svg";
export const COMA = coma;

const Svg = ({ src, height = "1em", fill = "#f8f9fa", more = {} }) =>
    src({ height, fill, ...more });

export default Svg;
