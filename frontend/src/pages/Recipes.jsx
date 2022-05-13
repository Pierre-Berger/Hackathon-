import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import RecipeCard from "../components/RecipeCard";
import "../css/recipe.css";
import recipe from "../components/Recipe";

function Recipes(id) {
  const fish = recipe.filter((f) => f.ingredientsFilter.fish);
  const meat = recipe.filter((f) => f.ingredientsFilter.meat);
  const milk = recipe.filter((f) => f.ingredientsFilter.milk);
  const weed = recipe.filter((f) => f.ingredientsFilter.weed);
  const healthy = recipe.filter((f) => f.ingredientsFilter.healthy);
  console.log(id);
  return (
    <>
      <Navbar />
      <div className="recipe-font">
        <div className="recipe-cont">
          {" "}
          <h3 className="recipe-slider-title"> Recettes au poisson ! </h3>
          <div className="recipes-slider">
            {fish.map((r) => (
              <Link to={`${id}`}>
                <RecipeCard recipe={r} />
              </Link>
            ))}
          </div>
          <h3 className="recipe-slider-title"> Recettes de viandard ! </h3>
          <div className="recipes-slider">
            {meat.map((r) => (
              <Link to={`${id}`}>
                <RecipeCard recipe={r} />
              </Link>
            ))}
          </div>
          <h3 className="recipe-slider-title"> Recettes contenant du lait !</h3>
          <div className="recipes-slider">
            {milk.map((r) => (
              <Link to={`${id}`}>
                <RecipeCard recipe={r} />
              </Link>
            ))}
          </div>
          <h3 className="recipe-slider-title">
            {" "}
            Recettes contenant de l&apos;herbe a chat !{" "}
          </h3>
          <div className="recipes-slider">
            {weed.map((r) => (
              <Link to={`${id}`}>
                <RecipeCard recipe={r} />
              </Link>
            ))}
          </div>
          <h3 className="recipe-slider-title"> Recettes healthy !</h3>
          <div className="recipes-slider">
            {healthy.map((r) => (
              <Link to={`${id}`}>
                <RecipeCard recipe={r} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Recipes;
