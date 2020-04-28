import React from "react";

const renderComa = () => {
    return (
        <div className="chiffre">
            <p className="label invisible">{","}</p>
            <div className="affichage">
                <button className="btn btn-primary invisible">
                    <span className="glyphicon glyphicon-chevron-up"></span>
                </button>
                <div className="digit">{","}</div>
                <button className="btn btn-primary invisible">
                    <span className="glyphicon glyphicon-chevron-down"></span>
                </button>
            </div>
        </div>
    );
};
export default ({ chiffre, nombre, updateNombre }) => {
    const { coef, color, label, info } = chiffre;
    const handleClick = (action) => {
        return (e) => {
            e.preventDefault();
            updateNombre({ coef, action });
        };
    };
    if (label === ",") {
        return renderComa();
    }
    const p10 = Math.pow(10, coef + 3);
    const digit = Math.floor((Math.round(nombre * 1000) % (p10 * 10)) / p10);
    return (
        <div className="chiffre">
            <p className={`label label-${color || label}`}>{label}</p>
            <div className="affichage">
                <button
                    className="btn btn-primary"
                    onClick={handleClick("INCREMENT")}
                    title={`Ajouter ${info}`}
                >
                    <span className="glyphicon glyphicon-chevron-up"></span>
                </button>
                <div className="digit">{digit}</div>
                <button
                    className="btn btn-primary"
                    onClick={handleClick("DECREMENT")}
                    title={`Enlever ${info}`}
                >
                    <span className="glyphicon glyphicon-chevron-down"></span>
                </button>
            </div>
        </div>
    );
};
