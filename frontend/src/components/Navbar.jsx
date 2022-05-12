import React from "react";
import "../css/navbar.css";
// import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar-cont">
      <div className="link-cont">
        {/*  <Link to="/">WEED</Link> */} <div>WEED</div>
      </div>
      <div className="logo-cont">
        <img
          src="../src/assets/Logo-marmithon-orangesvg.svg"
          alt="Logo de chat"
          className="cat-logo"
        />
      </div>
      <div className="link-cont">
        {/* <Link to="/">BOUFFE POUR CLEBS</Link> */}{" "}
        <div>BOUFFE POUR CLEBS</div>
      </div>
    </div>
  );
}
