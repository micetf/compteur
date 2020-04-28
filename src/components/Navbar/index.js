import React from "react";
import "bootstrap/js/collapse";

import Paypal from "./paypal";
import Contact from "./contact";
import Tools from "./tools";

export default ({ title }) => (
    <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="navbar-header">
            <a
                className="navbar-brand text-white"
                href="https://micetf.fr"
                title="Des Outils Pour La Classe"
            >
                MiCetF
            </a>
            <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbarMobile"
            >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarMobile">
            <div className="nav navbar-nav">
                <span className="navbar-brand text-white">></span>
                <span className="navbar-brand text-white">{title}</span>
            </div>
            <div className="navbar-right mr-2">
                <ul className="nav navbar-nav pull-left">
                    <li className="mr-2">
                        <Paypal />
                    </li>
                    <li className="mr-2">
                        <Tools />
                    </li>
                    <li>
                        <Contact />
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);
