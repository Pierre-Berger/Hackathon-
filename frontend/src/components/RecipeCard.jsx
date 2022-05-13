import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <Link to={`/recipes/${recipe.id}`} className="recipe-card">
      <div className="image-de-plat-cont">
        <img
          src={recipe.image}
          alt="BOUFFE POUR CLEBS"
          className="image-de-plat"
        />
      </div>
      <h3 className="recipe-title">{recipe.title} </h3>
    </Link>
  );
}

export default RecipeCard;
