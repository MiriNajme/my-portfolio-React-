import React from "react";

import "./project.styles.scss";

const Project = ({ project }) => {
    const { image, title, url } = project;

    return (
        <div className="col-md-6 mt-5">
            <a href={url} target="_blank" rel="noreferrer">
                <img src={`${process.env.PUBLIC_URL}/assets/images/${image}`} alt={title} className="background-image img-fluid rounded-4 shadow" />
                <h3 className="text-center mt-3 mb-0">{title}</h3>
            </a>
        </div>

    );
}

export default Project;