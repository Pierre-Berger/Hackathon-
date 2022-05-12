import React from "react";

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <div className="image-de-plat">
        <img src={recipe.image} alt="BOUFFE POUR CLEBS" />
      </div>
      <div> {recipe.title} </div>
    </div>
  );
}

export default RecipeCard;
