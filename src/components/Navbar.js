import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar justify-content-end row">
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
  );
};

export default Navbar;
