import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHtml5,
    faCss3,
    faJsSquare,
    faGit,
    faReact,
    faBootstrap,
    faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faFlask } from "@fortawesome/free-solid-svg-icons";

const Tech = (props) => {
    const iconStyle = {
        fontSize: "3rem",
        color: "white",
    };
    return (
        <div>
            <div className="row">
                <div className="col-lg-5 mx-auto"></div>
                <div className="col-lg-5 mx-auto">
                    <div className="container">
                        <div className="row">
                            <div
                                style={iconStyle}
                                className="col-4 d-flex justify-content-center align-items-center p-5"
                            >
                                <FontAwesomeIcon icon={faHtml5} />
                            </div>
                            <div
                                style={iconStyle}
                                className="col-4 d-flex justify-content-center align-items-center p-5"
                            >
                                <FontAwesomeIcon icon={faCss3} />
                            </div>
                            <div
                                style={iconStyle}
                                className="col-4 d-flex justify-content-center align-items-center p-5"
                            >
                                <FontAwesomeIcon icon={faJsSquare} />
                            </div>
                        </div>
                        <div className="row">
                            <div
                                style={iconStyle}
                                className="col-4 d-flex justify-content-center align-items-center p-5"
                            >
                                <FontAwesomeIcon icon={faGit} />
                            </div>
                            <div
                                style={iconStyle}
                                className="col-4 d-flex justify-content-center align-items-center p-5"
                            >
                                <FontAwesomeIcon icon={faReact} />
                            </div>
                            <div
                                style={iconStyle}
                                className="col-4 d-flex justify-content-center align-items-center p-5"
                            >
                                <FontAwesomeIcon icon={faBootstrap} />
                            </div>
                        </div>
                        <div className="row">
                            {" "}
                            <div
                                style={iconStyle}
                                className="col-4 d-flex justify-content-center align-items-center p-5"
                            >
                                <FontAwesomeIcon icon={faPython} />
                            </div>
                            <div
                                style={iconStyle}
                                className="col-4 d-flex justify-content-center align-items-center p-5"
                            >
                                <FontAwesomeIcon icon={faFlask} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tech;
