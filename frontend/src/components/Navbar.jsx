import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar-cont">
      <div className="link-cont">
        <Link to="/shop" className="link-nav">
          Chat&#39;Perché
        </Link>
      </div>
      <div className="logo-cont">
        <Link to="/">
          <img
            src="../src/assets/Logo-marmithon-orangesvg.svg"
            alt="Logo de chat"
            className="cat-logo"
          />
        </Link>
      </div>
      <div className="link-cont">
        <Link to="/Recipes" className="link-nav">
          Marmithon
        </Link>
      </div>
    </div>
  );
}
