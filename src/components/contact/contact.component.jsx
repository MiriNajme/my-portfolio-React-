import React from "react";
import { Link } from "react-router-dom";

import "./contact.styles.scss";

const Contact = () => (
    <div className="container content-container">
        <div className="content text-center contact-content">
            <h1 className="text-center mb-5">Let's get in touch!</h1>
            <h3><i className="fa-solid fa-at"></i> Email:</h3>
            <p><Link to="mailto:najme.miri@gmail.com">najme.miri@gmail.com</Link></p>
            <h3><i className="fa-brands fa-linkedin linkedin"></i> LinkedIn:</h3>
            <p>
                <Link
                    to="https://www.linkedin.com/in/najme-miri-b32126a6"
                    target="_blank"
                >Najme Miri</Link>
            </p>
            <h3><i className="fa-brands fa-square-github"></i> GitHub</h3>
            <p>
                <Link to="https://github.com/MiriNajme" target="_blank">Najme Miri</Link>
            </p>
        </div>
    </div>
);

export default Contact;