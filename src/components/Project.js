import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Project = ({ title, link, date, image, icons, description }) => {
    return (
        <div className="container container-fluid text-white project my-5">
            <div style={{ backgroundColor: "black", borderRadius: "10px" }} className="container">
                <div className="row d-flex flex-column p-5">
                    <div className="col d-flex justify-content-center my-2">
                        <h2>{title}</h2>
                    </div>
                    <div className="col d-flex justify-content-center my-2">
                        <div className="btn code-button">
                            <a href={link}>
                                <code>Code</code>
                            </a>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center my-2 text-muted small">
                        {date}
                    </div>
                </div>
                <div className="row d-flex justify-content-center p-5">
                    <img src={image} alt={title} width="95%" height="100%" />
                </div>
                <div className="row d-flex justify-content-center mx-4 p-5">
                    <div className="col-lg-6">
                        <h1 className="my-3">Overview</h1>
                        <p className="text-muted my-4">{description}</p>
                    </div>
                    <div className="col-lg-6">
                    <h1 className="my-3">Technologies</h1>
                        <div className="text-muted h1 d-flex justify-content-start my-4 px-1">
                        {icons.map(icon => <FontAwesomeIcon icon={icon} className="mx-2" /> )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
