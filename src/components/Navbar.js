import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md nav-title">
      <i className="bi bi-binoculars-fill nav-link link d-flex align-items-center">
        <a className="link nav-link" href="/">
          About
        </a>
      </i>
      <i className="bi bi-stack nav-link link d-flex align-items-center">
        <a className="link nav-link" href="/">
          Stack
        </a>
      </i>
      <i className="bi bi-hammer nav-link link d-flex align-items-center">
        <a className="link nav-link" href="/">
          Projects
        </a>
      </i>
      <i className="bi bi-envelope-fill nav-link link d-flex align-items-center">
        <a className="link nav-link" href="/">
          Contact
        </a>
      </i>
    </nav>
  );
};
