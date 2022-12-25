import React from "react";
import CustomButton, { BUTTON_TYPE_CLASSES } from "../custom-button/custom-button.component";
import { useNavigate } from "react-router-dom";

import "./me.styles.scss";

const Me = () => {

    const navigate = useNavigate();
    const goToWork = () => {
        navigate(`./projects`);
    }
    return (
        <div className="hero">
            <p>👋🏼 Hello, I am</p>
            <h1>Najme Miri</h1>
            <h2 className="mb-5">🇮🇷 Front-end developer based in Sweden</h2>
            <div>
                <CustomButton buttonType={BUTTON_TYPE_CLASSES.branding} onClick={goToWork} className="shadow">Get Started</CustomButton>
            </div>
        </div>
    )
};

export default Me;