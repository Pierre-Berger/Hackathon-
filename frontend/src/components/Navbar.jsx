import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar-cont">
      <div className="link-cont">
        <Link to="/" className="link-nav">
          WEED
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
        <Link to="/" className="link-nav">
          BOUFFE POUR CLEBS
        </Link>
      </div>
    </div>
  );
}
