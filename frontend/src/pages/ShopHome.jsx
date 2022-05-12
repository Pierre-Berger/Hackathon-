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
          <img className="arrow" src="../src/assets/arrow.gif" alt="arrow" />
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
