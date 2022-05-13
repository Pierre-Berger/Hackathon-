import React from "react";

function Engagement() {
  return (
    <div className="container-engagement">
      <h2 className="title-engagement">Nos Engagements </h2>
      <hr className="hr" />
      <div
        data-aos="zoom-in-right"
        data-aos-duration="1000"
        className="engagement"
      >
        <img className="medaille" src="../src/assets/medaille.png" alt="" />
        <h3>
          Des <span className="spangreen"> herbes </span>de qualité, developpées
          avec <span className="spangreen"> des acteurs locaux</span>
        </h3>
      </div>
      <div
        data-aos="zoom-in-left"
        data-aos-duration="1000"
        className="engagement"
      >
        <h1 className="drapeau"> &#127467;&#127479; </h1>
        <h3>
          Entièrement créées en <span className="spangreen">France </span> et{" "}
          <span className="spangreen">100% Bio </span>{" "}
        </h3>
      </div>

      <div
        data-aos="zoom-in-right"
        data-aos-duration="1000"
        className="engagement"
      >
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
  );
}

export default Engagement;
