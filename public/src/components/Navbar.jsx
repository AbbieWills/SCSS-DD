import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/components/_navbar.scss';

const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <NavLink className="navbar__brand" to="/"> Doggie's Delights </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="navbar__item">
              <NavLink className="navbar__link" activeclassname="active" to="/">
                Home
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink className="navbar__link" activeclassname="active" to="/about">
                About
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink className="navbar__link" activeclassname="active" to="/meetthemaker">
                Meet The Maker
              </NavLink>  
            </li>
            <li className="navbar__item">
              <NavLink className="navbar__link" activeclassname="active" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
