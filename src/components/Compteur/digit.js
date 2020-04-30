import React from "react";

import Svg, { CHEVERON_DOWN, CHEVERON_UP, CHIFFRES } from "../Svg";
import { hDecrementSVG, hIncrementSVG, hDigit } from "./constantes";

import { UNITE, DIZAINE, CENTAINE, DIXIEME, CENTIEME, MILLIEME } from "../Svg";

const SVGS = {
    C: CENTAINE,
    D: DIZAINE,
    U: UNITE,
    dixieme: DIXIEME,
    centieme: CENTIEME,
    millieme: MILLIEME,
};
export default ({ digit, nombre, updateNombre }) => {
    const handleClick = (payload) => {
        return (e) => {
            e.preventDefault();
            updateNombre(payload);
        };
    };

    const renderChiffre = ({ svg, coef, position, name, text }) => {
        return (
            <div className="chiffre" key={position}>
                <p className="mb-1">
                    <Svg
                        src={SVGS[name]}
                        height="3em"
                        more={{ width: "100%" }}
                    />
                </p>
                <div className="affichage">
                    <button
                        className="btn btn-primary"
                        onClick={handleClick({ action: "INCREMENT", coef })}
                        title={`Ajouter ${text}`}
                    >
                        <Svg src={CHEVERON_UP} height={hIncrementSVG} />
                    </button>
                    <div className="digit">
                        <Svg
                            src={svg}
                            height={hDigit}
                            more={{ width: "100%" }}
                            fill="141414"
                        />
                    </div>
                    <button
                        className="btn btn-primary"
                        onClick={handleClick({ action: "DECREMENT", coef })}
                        title={`Enlever ${text}`}
                    >
                        <Svg src={CHEVERON_DOWN} height={hDecrementSVG} />
                    </button>
                </div>
            </div>
        );
    };

    const d = (nombre * 1000).toString().padStart(15, "0").split("").reverse()[
        digit.coef + 3
    ];
    return renderChiffre({ svg: CHIFFRES[d], ...digit });
};
