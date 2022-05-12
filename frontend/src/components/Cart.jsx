import { useState } from "react";
import CartBubble from "./CartBubble";
import "../css/cart.css";

export default function Cart({ catnipItems, cart, updateCart, idItem }) {
  const [isOpen, setisOpen] = useState(false);
  const kaaris = catnipItems.find((item) => item.id === idItem.id);
  const handleClickMinus = () => {
    updateCart(cart - 1);
  };
  const handleClickPlus = () => {
    updateCart(cart + 1);
  };
  console.log(kaaris);
  return isOpen && kaaris ? (
    <div className="cart-component">
      <CartBubble setisOpen={setisOpen} isOpen={isOpen} />
      <h2>Panier</h2>
      <div className="cart-content-container">
        <div className="cart-content">
          <div className="article-cart">
            <h3>Articles</h3>
            <div>{`${kaaris ? kaaris.title : null} : ${
              kaaris ? kaaris.price : null
            }€`}</div>
          </div>
          <div className="quantity-cart">
            <h3>Quantité</h3>
            <div>{cart}</div>
          </div>
          {cart > 0 ? (
            <div className="modif">
              <h3>- / +</h3>
              <div>
                <button type="button" onClick={handleClickMinus}>
                  -
                </button>
                <button type="button" onClick={handleClickPlus}>
                  +
                </button>
              </div>
            </div>
          ) : null}
        </div>

        <h3 className="total">{`Total : ${kaaris.price * cart}€`}</h3>
      </div>
    </div>
  ) : (
    <CartBubble setisOpen={setisOpen} isOpen={isOpen} />
  );
}
