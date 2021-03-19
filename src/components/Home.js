import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import andresborncv from "../images/andresborncv.pdf";

const Home = () => {
    return (
            <div className="d-flex flex-column justify-content-center p-4">
            <div style={{ minHeight: "50vh" }} className="row">
                <div className="col-lg-6 mx-auto text-white my-5">
                    <h1 className="name">Andrés Born</h1>
                    <div className="my-5 text-white">
                        <div>
                            <span className="role">S</span>
                            <span className="role">o</span>
                            <span className="role">f</span>
                            <span className="role">t</span>
                            <span className="role">w</span>
                            <span className="role">a</span>
                            <span className="role">r</span>
                            <span className="role">e</span></div>
                        <div>
                            <span className="role">D</span>
                            <span className="role">e</span>
                            <span className="role">v</span>
                            <span className="role">e</span>
                            <span className="role">l</span>
                            <span className="role">o</span>
                            <span className="role">p</span>
                            <span className="role">e</span>
                            <span className="role">r</span>
                        </div>
                        
                    </div>
                </div>

                <div className="col-lg-6 decoration"></div>
            </div>
            <div className="row">
                <div className="col-12 aqua-border"></div>
            </div>
            <div className="row">
                <div className="col-lg-6 my-5">
                    <h1 className="text-white">
                        I build data-driven applications with React
                    </h1>
                </div>
                <div className="col-lg-6 my-5 d-flex justify-content-around align-items-center">
                <a href="https://github.com/andresborn/">
                <FontAwesomeIcon className="link" icon={faGithub} />
                </a>
                    <a href={andresborncv} target="_blank">
                    <FontAwesomeIcon className="link" icon={faFile} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
