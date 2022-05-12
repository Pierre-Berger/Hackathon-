import React from "react";
import "../css/shophome.css";

function Card({ catnipItems }) {
  const { title, image, descriptionStore, price, starNumber } = catnipItems;

  return (
    <div className="card">
      <div className="imagecontainer">
        <img className="imagecard" src={image} alt="img" />
      </div>
      <div className="titlecard">
        <h3>{title}</h3>
      </div>
      <div className="bottomcard">
        <div className="pcard">
          <p>{descriptionStore}</p>
          <p> Avis de nos clients :{"★".repeat(starNumber)} / 5</p>
        </div>

        <div className="btn-card">
          <p className="price"> {price} $</p>

          <button type="button" className="btnbuy">
            click
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
