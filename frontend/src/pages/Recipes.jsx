import React from "react";
import RecipeCard from "../components/RecipeCard";
import "../css/recipe.css";

function Recipes() {
  return (
    <div className="recipe-font">
      <div className="recipe-cont">
        {" "}
        <h3 className="recipe-slider-title"> SUCREE </h3>
        <div className="recipes-slider">
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
        <h3 className="recipe-slider-title"> SALE </h3>
        <div className="recipes-slider">
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
        <h3 className="recipe-slider-title"> SAVEUR FRAMBOISE </h3>
        <div className="recipes-slider">
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </div>
    </div>
  );
}

export default Recipes;
