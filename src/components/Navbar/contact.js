import React from "react";

const MAILTO = ["mailto:", "webmaser", "@", "micetf.fr"].join();
const SUBJECT = ["subject", "=", "A propos de ", "/compteur"].join();

export default () => {
    return (
        <a
            className="btn btn-link"
            title="Pour contacter le webmaster..."
            href={`${MAILTO}?${SUBJECT}`}
        >
            <span className="glyphicon glyphicon-envelope" />
        </a>
    );
};
