import React from "react";
import song1 from "../assets/catSound/mixkit-cartoon-kitty-begging-meow-92.wav";
import song2 from "../assets/catSound/mixkit-domestic-cat-hungry-meow-45.wav";
import song3 from "../assets/catSound/mixkit-little-cat-attention-meow-86.wav";
import song4 from "../assets/catSound/mixkit-cartoon-little-cat-meow-91.wav";
import highCat1 from "../assets/images/high-cat.jpg";
import highCat2 from "../assets/images/high-cat-2.jpg";
import highCat3 from "../assets/images/high-cat-3.jpg";
import highCat4 from "../assets/images/high-cat-4.jpg";
import megaphone from "../assets/images/megaphone.png";
import "../css/Comment.css";

export default function Comment() {
  const audio1 = new Audio(song1);
  const audio2 = new Audio(song2);
  const audio3 = new Audio(song3);
  const audio4 = new Audio(song4);

  const start1 = () => {
    audio1.play();
  };
  const start2 = () => {
    audio2.play();
  };
  const start3 = () => {
    audio3.play();
  };
  const start4 = () => {
    audio4.play();
  };

  return (
    <div className="comment-element">
      <h3>Commentaires de nos clients</h3>
      <div className="comment-container">
        <img src={highCat1} alt="high-cat" className="cat-image" />
        <div className="text-part">
          <button type="button" onClick={start1} className="comment-button">
            <img src={megaphone} alt="megaphone" />
          </button>
          <p>In the here in the now, no worries only meow.</p>
        </div>
      </div>

      <div className="comment-container">
        <img src={highCat2} alt="high-cat" className="cat-image" />
        <div className="text-part">
          <button type="button" onClick={start2} className="comment-button">
            <img src={megaphone} alt="megaphone" />
          </button>
          <p>Où sont mes testicules Summer ?</p>
        </div>
      </div>

      <div className="comment-container">
        <img src={highCat3} alt="high-cat" className="cat-image" />
        <div className="text-part">
          <button type="button" onClick={start3} className="comment-button">
            <img src={megaphone} alt="megaphone" />
          </button>
          <p>Chat alors, tu les vois ? Dis-moi que tu les vois ?!</p>
        </div>
      </div>
      <div className="comment-container">
        <img src={highCat4} alt="high-cat" className="cat-image" />
        <div className="text-part">
          <button type="button" onClick={start4} className="comment-button">
            <img src={megaphone} alt="megaphone" />
          </button>
          <p>J&apos;ai vomis dans le panier a linge.</p>
        </div>
      </div>
    </div>
  );
}
