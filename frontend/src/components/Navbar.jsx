import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar-cont">
      <div className="link-cont">
        <Link to="/shop" className="link-nav">
          {`CHAT'PERCHÉ`}
        </Link>
      </div>
      <div className="logo-cont">
        <Link to="/recipes">
          <img
            src="../src/assets/Logo-marmithon-orangesvg.svg"
            alt="Logo de chat"
            className="cat-logo"
          />
        </Link>
      </div>
      <div className="link-cont">
        <Link to="/recipes" className="link-nav">
          MARMITHON
        </Link>
      </div>
    </div>
  );
}
