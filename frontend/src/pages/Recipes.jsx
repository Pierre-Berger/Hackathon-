import React from "react";
import Navbar from "../components/Navbar";
import RecipeCard from "../components/RecipeCard";
import "../css/recipe.css";
import recipe from "../components/Recipe";

function Recipes() {
  return (
    <>
      <Navbar />
      <div className="recipe-font">
        <div className="recipe-cont">
          {" "}
          <h3 className="recipe-slider-title"> SUCREE </h3>
          <div className="recipes-slider">
            {recipe.map((r) => (
              <RecipeCard recipe={r} />
            ))}
          </div>
          <h3 className="recipe-slider-title"> SALE </h3>
          <div className="recipes-slider">
            <RecipeCard recipe={recipe} />
            <RecipeCard recipe={recipe} />
            <RecipeCard recipe={recipe} />
            <RecipeCard recipe={recipe} />
          </div>
          <h3 className="recipe-slider-title"> SAVEUR FRAMBOISE </h3>
          <div className="recipes-slider">
            <RecipeCard recipe={recipe} />
            <RecipeCard recipe={recipe} />
            <RecipeCard recipe={recipe} />
            <RecipeCard recipe={recipe} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Recipes;
