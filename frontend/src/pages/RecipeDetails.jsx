import React from "react";
import Recipe from "../components/Recipe";

function RecipeDetails() {
  return (
    <div>
      <h1>!{Recipe[0].title}!</h1>
      <h3>Ingrédients</h3>
      <ul>
        {Recipe[0].ingredients.map((el) => (
          <li>{el}</li>
        ))}
      </ul>
      <h3>Préparation</h3>
      <ul>
        {Recipe[0].steps.map((el) => (
          <li>{el}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeDetails;
