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
            Premiere boutique d&#39;herbe à chat de France &#127467;&#127479;
          </h1>
          <div>
            <img className="arrow" src="../src/assets/arrow.gif" alt="arrow" />
          </div>
        </div>
      </div>
      <div className="container-engagement">
        <h2 className="title-engagement">Nos Engagements </h2>
        <hr className="hr" />
        <div className="engagement">
          <img className="medaille" src="../src/assets/medaille.png" alt="" />
          <h3>
            Des <span className="spangreen"> herbes </span>de qualité,
            developpées avec{" "}
            <span className="spangreen"> des acteurs locaux</span>
          </h3>
        </div>
        <div className="engagement">
          <h1 className="drapeau"> &#127467;&#127479; </h1>
          <h3>
            Entièrement créées en <span className="spangreen">France </span> et{" "}
            <span className="spangreen">100% Bio </span>{" "}
          </h3>
        </div>

        <div className="engagement">
          <img
            className="gifelon"
            src="../src/assets/elon-musk-smoke.gif"
            alt="gif"
          />
          <h3>
            {" "}
            <span className="spangreen">Testées et Validées </span> par des
            experts du domaines{" "}
          </h3>
        </div>
      </div>
      <div className="containercard">
        <div className="product-title">
          <h1 className="title-card">Nos Produits</h1>
          <hr className="hr" />
        </div>
        {catnipItems.map((el) => (
          <Card catnipItems={el} />
        ))}
      </div>
    </div>
  );
}

export default ShopHome;
