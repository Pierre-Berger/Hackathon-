import { useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { useEffect } from "react/cjs/react.production.min";
import Navbar from "../components/Navbar";
import catnipItems from "../assets/catnipItems";
import "../css/catnipItem.css";
import Cart from "../components/Cart";

export default function CatnipItem() {
  const { id } = useParams();
  // charger le localstorage
  // if cart exist alors JSON.parse le lCS sinon empty array
  const localStoreCart = localStorage.getItem("cart") || "[0, 0, 0, 0, 0, 0]";
  console.log(localStoreCart);
  const [cart, updateCart] = useState(JSON.parse(localStoreCart));

  const arrowRightLimit = catnipItems.length - 1;
  const cartUpdater = (index, addOrNot) => {
    const bastien = [...cart];
    if (addOrNot) {
      bastien[index] += 1;
    } else if (!addOrNot && bastien[index] > 0) {
      bastien[index] -= 1;
    }
    updateCart(bastien);
    localStorage.setItem("cart", JSON.stringify(bastien));
  };
  return (
    <div>
      <Navbar />
      <Cart
        cart={cart}
        idItem={id}
        updateCart={updateCart}
        catnipItems={catnipItems}
        cartUpdater={cartUpdater}
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
          onClick={() => cartUpdater(id, true)}
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}
