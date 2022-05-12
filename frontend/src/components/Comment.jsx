import React from "react";
import song2 from "../assets/catSound/mixkit-cartoon-kitty-begging-meow-92.wav";
import "../css/Comment.css";

function Comment() {
  const audio = new Audio(song2);
  const start = () => {
    audio.play();
  };

  return (
    <div>
      <button type="button" onClick={start} className="comment-button">
        Voici un commentaire d&apos;un utilisateur heureux
      </button>
    </div>
  );
}

export default Comment;
