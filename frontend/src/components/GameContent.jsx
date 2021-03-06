/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable no-alert */
import React, { useState } from "react";
import "../css/Game.css";

function GameContent() {
  const cat = document.getElementById("cat");
  const kaaris = document.getElementById("kaaris");
  const [isJump, setIsJump] = useState(true);
  if (isJump === "true") {
    setIsJump(false);
  }
  const isAlive = setInterval(function () {
    const catTop = parseInt(
      window.getComputedStyle(cat).getPropertyValue("top"),
      10
    );
    const kaarisLeft = parseInt(
      window.getComputedStyle(kaaris).getPropertyValue("left"),
      10
    );

    if (kaarisLeft < 80 && kaarisLeft > 0 && catTop >= 300) {
      if (window.confirm("GameOver!")) {
        window.location.reload();
      }
    }
  }, 10);
  const isMobile = navigator.userAgentData.mobile;
  console.log(isMobile);
  return (
    <div className="containered">
      <div className="game-container">
        <div id="cat" className={isJump ? "jump" : "no-jump"} />
        <div id="kaaris" />
      </div>
      <div className="kaaris-warning">
        <p>Clique sur start et échappe au kaaris sauvage</p>
      </div>
      <div className="button-start">
        <button
          type="button"
          onKeyDown={(() => setIsJump(!isJump), () => setIsJump(!isJump))}
        >
          Start
        </button>
      </div>
    </div>
  );
}

export default GameContent;
