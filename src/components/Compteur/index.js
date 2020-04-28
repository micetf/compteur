import React from "react";

import config from "../../config";
import Classe from "./classe";

export default ({ compteur: { choix, nombre }, updateNombre }) => {
    const renderClasse = (classe) => {
        return (
            <div className={`classe ${classe.label}`} key={classe.label}>
                <Classe
                    classe={classe}
                    nombre={nombre}
                    updateNombre={updateNombre}
                />
            </div>
        );
    };
    return (
        <div className="compteur">
            {config.byId[choix].classes.map(renderClasse)}
        </div>
    );
};
