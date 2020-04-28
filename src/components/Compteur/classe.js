import React from "react";
import Chiffre from "./chiffre";

const renderLabelClasse = (label) => {
    if (label === "coma") {
        return <p className="label invisible"> </p>;
    }
    return <p className="label label-info">{label}</p>;
};

export default ({ classe, nombre, updateNombre }) => {
    const renderChiffre = (chiffre, index) => {
        return (
            <Chiffre
                key={index}
                chiffre={chiffre}
                nombre={nombre}
                updateNombre={updateNombre}
            />
        );
    };
    return (
        <div>
            <div className="classe-header">
                {renderLabelClasse(classe.label)}
            </div>
            <div className="chiffres">{classe.chiffres.map(renderChiffre)}</div>
        </div>
    );
};
