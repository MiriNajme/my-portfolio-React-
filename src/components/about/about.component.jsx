import React from "react";
import CustomButton, { BUTTON_TYPE_CLASSES } from "../custom-button/custom-button.component";
import { useNavigate } from "react-router-dom";

import "./about.styles.scss";

const About = () => {

    const navigate = useNavigate();
    const goToWork = () => {
        navigate(`../projects`);
    }
    return (
        <div className="container content-container">
            <div className="row text-center">
                <div className="col-lg-6 text-start content">
                    <h1 className="mb-4">Hi I am Najme Miri</h1>
                    <h2 className="mb-4">Front-end developer, based in Sweden</h2>
                    <p className="mb-5">
                        I am a second-year master student of Computer and System Sciences at Stockholm University, seeking to apply for a position as a front-end developer and worked with HTML and CSS for years. I am also familiar and have recently worked with other frontend technologies like React, Redux, JavaScript and SASS. I am a quick learner and love opportunities that help me dive into the tech world. I am able to effectively self-manage during independent projects, as well as collaborate in a team setting.
                    </p>
                    <CustomButton buttonType={BUTTON_TYPE_CLASSES.branding} onClick={goToWork} className="shadow btn-mobile">View all projects</CustomButton>
                </div>
                <div className="col-lg-6 my-image">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/me.png`}
                        className="img-fluid rounded-4"
                        alt="Najme Miri" />
                </div>
            </div>
        </div>
    )
};

export default About;