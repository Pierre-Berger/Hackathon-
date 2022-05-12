/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";
import Card from "../components/Card";
import "../css/shophome.css";
import Navbar from "../components/Navbar";
import catnipItems from "../assets/catnipItems";

function ShopHome() {
  return (
    <div className="containershop">
      <Navbar />
      <div className="videocontainer">
        <video className="video" autoPlay loop muted>
          <source src="../src/assets/video2.mp4" type="video/mp4" />{" "}
        </video>
        <div className="video-title-container">
          <h1 className="videotitle">Chat&#39;Perché </h1>
          <h1 className="videop">
            Premiere boutique d&#39;herbe a chat de France &#127467;&#127479;
          </h1>
          <div>
            <img className="arrow" src="../src/assets/arrow.gif" alt="arrow" />
          </div>
        </div>
      </div>
      <div className="container-engagement">
        <h2 className="title-engagement">Nos Engagements </h2>
        <hr className="hr" />
        <div className="engagement1">
          <img className="medaille" src="../src/assets/medaille.png" alt="" />
          <h3>Des herbes de qualité, developper avec des acteurs locaux </h3>
        </div>
        <div className="engagement2">
          <h1 className="drapeau"> &#127467;&#127479; </h1>
          <h3>Entierement crée en France </h3>
        </div>
      </div>
      <div className="containercard">
        {catnipItems.map((el) => (
          <Card catnipItems={el} />
        ))}
      </div>
    </div>
  );
}

export default ShopHome;
