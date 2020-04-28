import React, { useContext } from "react";
import config from "../../config";

export default ({ choix, updateChoix }) => {
    const handleClick = (e, next) => {
        e.preventDefault();
        updateChoix({ choix: next });
    };
    const renderChoix = (id) => {
        const active = choix === id ? "active" : "";
        const { hash, label } = config.byId[id];
        return (
            <a
                key={id}
                href={hash}
                className={`btn btn-primary ${active}`}
                onClick={(e) => handleClick(e, id)}
            >
                {label}
            </a>
        );
    };
    return (
        <div className="row">
            <div className="btn-group btn-group-justified">
                {config.allIds.map(renderChoix)}
            </div>
        </div>
    );
};
