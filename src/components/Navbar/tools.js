import React from "react";

const TOOLS_URL = "https://micetf.fr/outils";

export default () => (
    <a
        className="btn btn-link"
        title="Chercher un outil sur micetf.fr..."
        href={TOOLS_URL}
        target="_blank"
    >
        <span className="glyphicon glyphicon-search" />
    </a>
);
