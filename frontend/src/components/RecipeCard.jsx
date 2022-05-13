import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <Link to={`/recipes/${recipe.id}`} className="recipe-card">
      <div className="image-de-plat">
        <img src={recipe.image} alt="BOUFFE POUR CLEBS" />
      </div>
      <div> {recipe.title} </div>
    </Link>
  );
}

export default RecipeCard;
