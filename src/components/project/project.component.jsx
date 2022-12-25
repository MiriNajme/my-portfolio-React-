import React from "react";
import { useNavigate } from "react-router-dom";

import "./project.styles.scss";

const Project = ({ project }) => {
    const { image, title, route } = project;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);
    return (
        <div className="col-md-6 mt-5">
            <img src={`${process.env.PUBLIC_URL}/assets/images/${image}`} alt={title} className="background-image img-fluid rounded-4 shadow" />
            <h3 className="text-center mt-3 mb-0" onClick={onNavigateHandler}>{title}</h3>
            <p className="text-center mb-0">Built with HTML and CSS</p>
        </div>

    );
}

export default Project;