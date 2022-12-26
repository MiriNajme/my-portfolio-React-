import React from "react";
import Project from "../project/project.component";
import PROJECTS_LIST from "../../projects.json";

import "./projects.styles.scss";

const Projects = () => {
    return (
        <div className="container content-container">
            <div className="content work-content text-center" >
                <h1 className="text-center">Take a look at what I've been working on!</h1>

                <div className="row">
                    {PROJECTS_LIST.projects.map((project) => (
                        <Project key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Projects;