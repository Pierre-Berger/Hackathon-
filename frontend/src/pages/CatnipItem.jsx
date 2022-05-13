import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import catnipItems from "../assets/catnipItems";
import "../css/catnipItem.css";
import Cart from "../components/Cart";
import Comment from "../components/Comment";

export default function CatnipItem() {
  const { id } = useParams();
  const [cart, updateCart] = useState(0);
  const [idItem, setidItem] = useState(id);

  const handleClick = () => {
    updateCart(cart + 1);
    setidItem(catnipItems[parseInt(id, 10)]);
  };

  const arrowRightLimit = catnipItems.length - 1;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <div className="arrow-container">
          <Link
            to={
              parseInt(id, 20) === 0
                ? `/shop/${arrowRightLimit}`
                : `/shop/${parseInt(id, 20) - 1}`
            }
          >
            <button type="button" className="btnbuy">
              <img
                src="../src/assets/images/arrow-left.png"
                alt="arrow-left"
                className="arrow-left"
              />
            </button>
          </Link>

          <Link
            to={
              parseInt(id, 20) >= arrowRightLimit
                ? "/shop/0"
                : `/shop/${parseInt(id, 20) + 1}`
            }
          >
            <button type="button" className="btnbuy">
              <img
                src="../src/assets/images/arrow-right.png"
                alt="arrow-right"
                className="arrow-right"
              />
            </button>
          </Link>
        </div>

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

        <Comment />
      </div>
    </div>
  );
}
