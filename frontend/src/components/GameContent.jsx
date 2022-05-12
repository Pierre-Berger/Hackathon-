/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from "react";
import "../css/Game.css";

function GameContent() {
  const catGamer = document.getElementById("cat");
  const [nik, setNik] = useState(0);
  function jump() {
    catGamer.classList.add("jump");
    setNik(nik + 1);
  }

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("nik");
  }, [nik]);
  return (
    <div className="game-container">
      <div tabIndex={-1} id="cat" />
      <div className="kaaris" />
      <button type="button" onClick={() => jump()}>
        yo
      </button>
    </div>
  );
}

export default GameContent;
