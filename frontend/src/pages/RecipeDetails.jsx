import React from "react";
import Recipe from "../components/Recipe";
import "../css/RecipeDetails.css";

function RecipeDetails() {
  return (
    <div className="Card-container">
      <h1 className="Card-title">{Recipe[1].title}</h1>
      <img src={Recipe[6].image} alt="" className="Card-image" />
      <h3 className="Card-ingredient-title">Ingrédients</h3>
      <ul className="Card-ingredient">
        {Recipe[1].ingredients.map((el) => (
          <li>{el}</li>
        ))}
      </ul>
      <h3 className="Card-preparation-title">Préparation</h3>
      <ul className="Card-preparation">
        {Recipe[0].steps.map((el) => (
          <li>{el}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeDetails;
