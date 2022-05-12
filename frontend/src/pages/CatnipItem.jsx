import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import catnipItems from "../assets/catnipItems";
import "../css/catnipItem.css";
import Cart from "../components/Cart";

export default function CatnipItem() {
  const { id } = useParams();
  const [cart, updateCart] = useState(0);
  const [idItem, setidItem] = useState(id - 1);
  const handleClick = () => {
    updateCart(cart + 1);
    setidItem(catnipItems[parseInt(id, 10)]);
  };
  console.log(idItem.id);
  return (
    <div>
      <Navbar />
      <Cart
        cart={cart}
        idItem={idItem}
        updateCart={updateCart}
        catnipItems={catnipItems}
      />
      <div className="catnipItem-article">
        <h1 className="catnipItem-title">{catnipItems[id].title}</h1>
        <img
          className="catnipItem-image"
          src={catnipItems[id].image}
          alt={catnipItems[id].title}
        />
        <div className="catnipItem-description">
          <ul>
            {catnipItems[id].description.map((el) => (
              <li>{el}</li>
            ))}
          </ul>
        </div>
        <div className="catnipItem-information">
          <div className="catnipItem-stars">
            {"★".repeat(catnipItems[id].starNumber)}/5
          </div>
          <div className="catnipItem-price">{catnipItems[id].price} €</div>
        </div>
        <button
          className="catnipItem-button"
          type="button"
          onClick={handleClick}
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}
