import React from "react";
import { Link } from "react-router-dom";
import "../css/shophome.css";

function Card({ catnipItems }) {
  const { title, image, descriptionStore, price, starNumber, id } = catnipItems;

  return (
    <div className="card">
      <div className="imagecontainer">
        <img className="imagecard" src={image} alt="img" />
      </div>
      <div className="titlecard">
        <h3>{title}</h3>
      </div>
      <div className="bottomcard">
        <p>{descriptionStore}</p>
        <p>
          {" "}
          Avis de nos clients :{" "}
          <span className="star">{"★".repeat(starNumber)} </span>/ 5
        </p>
        <p>
          {" "}
          À partir de <span className="star"> {price} euros </span>{" "}
        </p>
        <Link to={`${id}`}>
          <button type="button" className="btnbuy">
            Voir le produit
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
