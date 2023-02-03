import React, { Fragment } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import "./navbar.styles.scss";


const NavBar = () => (
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
                            <NavLink to="/"
                                title="Home page"
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active active-menu' : 'nav-link'
                                }>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/projects"
                                title="Najme's work"
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active active-menu' : 'nav-link'
                                }>
                                Work
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about"
                                title="About Najme"
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active active-menu' : 'nav-link'
                                }>
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact"
                                title="Contact Najme"
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active active-menu' : 'nav-link'
                                }>
                                Contact
                            </NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
        <Outlet />
    </Fragment>
);

export default NavBar;