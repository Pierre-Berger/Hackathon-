import React from "react";
import "../assets/shophome.css";
import test from "../assets/test.jpg";

function Card() {
  return (
    <div className="card">
      <div className="imagecontainer">
        <img className="imagecard" src={test} alt="img" />
      </div>
      <div className="titlecard">
        <h3>Je suis un titre </h3>
      </div>
      <div className="bottomcard">
        <div className="pcard">
          <p>
            je suis une explication d&#39;un produit fictif qui est trop bien{" "}
          </p>
        </div>

        <div className="btn-card">
          <p> 60$</p>
          <button type="button" className="btnbuy">
            click
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
