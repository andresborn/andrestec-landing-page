import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHtml5,
    faCss3,
    faJsSquare,
    faReact,
    faBootstrap, } from "@fortawesome/free-brands-svg-icons";

const Project = ({ title, link, date, image, icons }) => {
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
                    <img src={image} alt={title} width="90%" />
                </div>
                <div className="row d-flex justify-content-center mx-4 p-5">
                    <div className="col-lg-6">
                        <h1 className="my-3">Keypoints:</h1>
                        <p className="text-muted small my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae veritatis officia dolor earum! Pariatur molestias minus iusto eum amet repudiandae quibusdam impedit aperiam facilis enim quaerat, illum placeat neque tempora temporibus ipsum modi hic tenetur in quam soluta molestiae dolore.</p>
                    </div>
                    <div className="col-lg-6">
                    <h1 className="my-3">Technologies used</h1>
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
