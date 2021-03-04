import React from "react";

const Navbar = () => {
  const bgColor = {
    backgroundColor: "#18191e"
  }
  return (
    <div className="container container-fluid">
      <nav style={bgColor} className="navbar fixed-top justify-content-end row">
      <a
        className="link nav-link d-flex flex-row align-items-center link"
        href="/"
      >
        <i className="bi bi-binoculars-fill nav-link bounce"></i>
        About
      </a>

      <a
        className="link nav-link d-flex flex-row align-items-center link"
        href="/"
      >
        <i className="bi bi-stack nav-link bounce"></i>
        Stack
      </a>

      <a className="link nav-link  d-flex align-items-center link" href="/">
        <i className="bi bi-hammer nav-link bounce"></i>
        Projects
      </a>

      <a className="link nav-link d-flex align-items-center link" href="/">
        <i className="bi bi-envelope-fill nav-link bounce"></i>
        Contact
      </a>
    </nav>
    </div>
    
  );
};

export default Navbar;
