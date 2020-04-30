import React from "react";
import compteurs from "../../compteurs";

export default ({ choix, updateChoix }) => {
    const handleClick = (e, next) => {
        e.preventDefault();
        updateChoix({ choix: next });
    };
    const renderChoix = (id) => {
        const navItem = choix === id ? "nav-item active" : "nav-item";
        const { hash, name } = compteurs.byId[id];
        return (
            <li key={id} className={navItem}>
                <a
                    href={hash}
                    className="nav-link"
                    onClick={(e) => handleClick(e, id)}
                >
                    {name}
                </a>
            </li>
        );
    };
    return (
        // <div className="btn-group d-flex mx-auto w-100" role="group">
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary mx-auto">
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#toggleChoixCompteur"
                aria-controls="toggleChoixCompteur"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="toggleChoixCompteur">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    {compteurs.allIds.map(renderChoix)}
                </ul>
            </div>
        </nav>
    );
};
