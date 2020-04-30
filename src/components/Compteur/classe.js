import React from "react";
import Digit from "./digit";

const renderClasseName = (label) => {
    return <div className="badge badge-info">{label}</div>;
};

export default ({ classe, nombre, updateNombre }) => {
    const renderDigit = (id, index) => (
        <Digit
            key={index}
            digit={classe.digits.byId[id]}
            nombre={nombre}
            updateNombre={updateNombre}
        />
    );
    return (
        <div className="classe classe-header">
            <div className="mb-2">{renderClasseName(classe.name)}</div>
            <div className="chiffres">
                {classe.digits.allIds.map(renderDigit)}
            </div>
        </div>
    );
};
