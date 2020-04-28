import React from "react";

const PAYPAL_ID = "Q2XYVFP4EEX2J";
const PAYPAL_URL = "https://www.paypal.com/cgi-bin/webscr";

export default () => (
    <form action={PAYPAL_URL} method="post" target="_top">
        <button
            className="btn btn-link navbar-btn"
            title="Si vous pensez que ces outils le méritent... Merci !"
            type="submit"
        >
            <span className="glyphicon glyphicon-heart" />
        </button>
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value={PAYPAL_ID} />
    </form>
);
