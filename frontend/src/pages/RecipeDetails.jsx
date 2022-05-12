import React from "react";
import { useParams } from "react-router-dom";
import Recipe from "../components/Recipe";
import "../css/RecipeDetails.css";
import Comment from "../components/Comment";
import Navbar from "../components/Navbar";

function RecipeDetails() {
  const { id } = useParams();
  return (
    <div>
      <Navbar />
      <div className="Card-container">
        <h1 className="Card-title">{Recipe[id].title}</h1>
        <img src={Recipe[id].image} alt="" className="Card-image" />
        <h3 className="Card-ingredient-title">Ingrédients</h3>
        <ul className="Card-ingredient">
          {Recipe[id].ingredients.map((el) => (
            <li>{el}</li>
          ))}
        </ul>
        <h3 className="Card-preparation-title">Préparation</h3>
        <ul className="Card-preparation">
          {Recipe[id].steps.map((el) => (
            <li>{el}</li>
          ))}
        </ul>
      </div>
      <div className="comment-tile">
        <Comment />
      </div>
    </div>
  );
}

export default RecipeDetails;
