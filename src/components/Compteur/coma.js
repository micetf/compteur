import React from "react";

import Svg, { COMA } from "../Svg";
import { hDecrementSVG, hIncrementSVG, hDigit } from "./constantes";

export default () => (
    <div className="classe coma">
        <div className="mb-2">
            <div className="badge invisible">,</div>
        </div>
        <div className="chiffres">
            <div className="chiffre">
                <p className="mb-1 invisible">
                    <Svg src={COMA} height="3em" more={{ width: "100%" }} />
                </p>

                <div className="affichage">
                    <button className="btn invisible">
                        <Svg src={COMA} height={hIncrementSVG} />
                    </button>
                    <div className="digit">
                        <Svg src={COMA} height={hDigit} fill="141414" />
                    </div>
                    <button className="btn invisible">
                        <Svg src={COMA} height={hDecrementSVG} />
                    </button>
                </div>
            </div>
        </div>
    </div>
);
