import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navbar.styles.scss";


const NavBar = () =>
    <Fragment>
        <div className="navbar navbar-expand-lg fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/about">Najme Miri</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarNav"
                >

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                className="nav-link active active-menu"
                                aria-current="page"
                                to="/"
                                title="Homepage"
                            >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects" title="Najme's work"
                            >Work</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" title="About Najme"
                            >About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" title="Contact Najme"
                            >Contact</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
        <Outlet />
    </Fragment>
    ;

export default NavBar;