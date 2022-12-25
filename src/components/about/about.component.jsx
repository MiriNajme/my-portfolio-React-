import React from "react";
import CustomButton, { BUTTON_TYPE_CLASSES } from "../custom-button/custom-button.component";
import { useNavigate } from "react-router-dom";
import myPhoto from "../../assets/images/me.png";

const About = () => {

    const navigate = useNavigate();
    const goToWork = () => {
        navigate(`../projects`);
    }
    return (
        <div className="container content-container">
            <div className="row">
                <div className="col-lg-6 content">
                    <h1 className="mb-4">Hi I am Najme Miri</h1>
                    <h2 className="mb-4">Front-end developer, based in Sweden</h2>
                    <p className="mb-5">
                        For anyone who wants to start learning code, this workshop is very
                        interesting. You will be challenged with different exercises, and
                        everything is well explained, homework and deadlines are good for
                        keep focus
                    </p>
                    <CustomButton buttonType={BUTTON_TYPE_CLASSES.branding} onClick={goToWork} className="shadow btn-mobile">View all projects</CustomButton>
                </div>
                <div className="col-lg-6 text-center">
                    <img
                        src={myPhoto}
                        className="img-fluid rounded-4"
                        alt="Najme"
                    />
                </div>
            </div>
        </div>
    )
};

export default About;