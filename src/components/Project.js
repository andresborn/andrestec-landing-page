import React from "react";

const Project = ({title, link, date, image}) => {
    return (
        <div className="container container-fluid text-white project">
            <div className="row d-flex flex-column">
                <div className="col d-flex justify-content-center my-2">{title}</div>
                <div className="col d-flex justify-content-center my-2">{link}</div>
                <div className="col d-flex justify-content-center my-2">{date}</div>
            </div>
            <div className="row">
                <img src={image} alt={title}/>
            </div>
            <div className="row"></div>
        </div>
    );
};

export default Project;
