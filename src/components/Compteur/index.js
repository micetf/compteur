import React from "react";

import compteurs from "../../compteurs";
import Classe from "./classe";
import Coma from "./coma";

export default ({ compteur: { choix, nombre }, updateNombre }) => {
    const renderClasse = (classe) => {
        const isNotClasse = classe.name === "coma";
        return isNotClasse ? (
            <Coma key="coma" />
        ) : (
            <Classe
                key={classe.name}
                classe={classe}
                nombre={nombre}
                updateNombre={updateNombre}
            />
        );
    };

    return (
        <div className="compteur">
            {compteurs.byId[choix].classes.map(renderClasse)}
        </div>
    );
};
