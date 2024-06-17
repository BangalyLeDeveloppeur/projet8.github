import { formToJSON } from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png"
const Navigation = () => {
  return (
    <div className="navigation">
        {/* image du log*/}
      <img src={logo} alt="Image du logo" />
      <ul>
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-active" : " ")}
        >
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/about"className={(nav) => (nav.isActive ? "nav-active" : " ")}>
          <li> A propos</li>
        </NavLink>
        
      </ul>
    </div>
  );
};

export default Navigation;
