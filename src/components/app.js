import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "../css/style.css";

import Navbar from "./Navbar";
import Contact from "./Navbar/Contact";
import Paypal from "./Navbar/Paypal";
import Tools from "./Navbar/Tools";

import Choix from "./Choix";
import Compteur from "./Compteur";

import { getHash, updateCompteur } from "../actions";

const initialCompteur = getHash();
export default ({ tool }) => {
    const path = "https://micetf.fr";

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
        <div className="container-fluid">
            <Navbar
                path={path}
                tool={tool}
                right={[
                    <Paypal />,
                    <Tools path={path} />,
                    <Contact tool={tool} />,
                ]}
            />
            <div className="row">
                <div className="row mb-3 mx-auto">
                    <Choix
                        choix={compteur.choix}
                        updateChoix={handleUpdateChoix}
                    />
                </div>
            </div>
            <div className="container-fluid">
                <Compteur
                    compteur={compteur}
                    updateNombre={handleUpdateNombre}
                />
            </div>
        </div>
    );
};
