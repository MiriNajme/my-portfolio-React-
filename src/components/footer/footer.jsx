import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "./footer.styles.scss";

const Footer = () => (
    <Fragment>
        <footer className="pt-5">
            <h3 className="text-center">
                <a href="mailto:najme.miri@gmail.com" target="_blank" rel="noreferrer"
                    className="text-decoration-none text-dark">najme.miri@gmail.com</a>
            </h3>
            <div className="social-links text-center mb-5">
                <a href="https://github.com/MiriNajme" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-square-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/najme-miri-b32126a6" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <Link to="/"><i className="fa-brands fa-facebook"></i></Link>
            </div>
            <p className="text-center mt-4 text-muted">
                ✌🏼This project was coded by Najme Miri, and it is
                <a href="https://github.com/MiriNajme/My-Portfolio" target="_blank" rel="noreferrer"
                > open-source
                </a>
            </p>
        </footer>
    </Fragment>
);

export default Footer;