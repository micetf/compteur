import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "../css/style.css";

import Navbar from "./Navbar";
import Choix from "./Choix";
import Compteur from "./Compteur";

import { getHash, updateCompteur } from "../actions";

const initialCompteur = getHash();
export default ({ title }) => {
    const [compteur, setCompteur] = useState(initialCompteur);

    const handleUpdateChoix = ({ choix }) => {
        const next = updateCompteur(compteur, {
            type: "CHANGE_CHOIX",
            payload: choix,
        });
        setCompteur(next);
    };
    const handleUpdateNombre = ({ action, coef }) => {
        const next = updateCompteur(compteur, { type: action, payload: coef });
        setCompteur(next);
    };

    return (
        <div className="container">
            <Navbar title={title} />
            <div className="row">
                <div className="row mb-3">
                    <Choix
                        choix={compteur.choix}
                        updateChoix={handleUpdateChoix}
                    />
                </div>
                <div className="row">
                    <Compteur
                        compteur={compteur}
                        updateNombre={handleUpdateNombre}
                    />
                </div>
            </div>
        </div>
    );
};
