import { useState, useEffect } from "react";
import CartBubble from "./CartBubble";
import "../css/cart.css";

export default function Cart({ catnipItems, cart, updateCart, idItem }) {
  const [isOpen, setisOpen] = useState(false);
  const [cartCount, setCartCount] = useState([]);
  const kaaris = catnipItems.find((item) => item.id === idItem.id);

  const handleClickMinus = () => {
    updateCart(cart - 1);
  };
  const handleClickPlus = () => {
    updateCart(cart + 1);
  };

  const stateStorage = JSON.parse(localStorage.getItem("panier"));

  useEffect(() => {
    if (stateStorage !== null) {
      console.log("pas ici");
      if (cartCount) {
        setCartCount({ idItem, cart });
        console.log("ici");
        console.log(stateStorage);
      } else if (stateStorage.idItem.id !== kaaris.id) {
        setCartCount({ ...cartCount } + { idItem, cart });
      }
    }
  }, [idItem, cart]);
  const test =
    !stateStorage || cartCount
      ? localStorage.setItem("panier", JSON.stringify(cartCount))
      : null;
  console.log(test);
  console.log(cartCount);
  return isOpen ? (
    <div className="cart-component">
      <CartBubble setisOpen={setisOpen} isOpen={isOpen} />
      <h2>Panier</h2>
      {cart > 0 ? (
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
          </div>

          <h3 className="total">{`Total : ${kaaris.price * cart}€`}</h3>
        </div>
      ) : (
        <div>
          <h3 className="empty-cart">Votre panier est vide !</h3>
        </div>
      )}
    </div>
  ) : (
    <CartBubble setisOpen={setisOpen} isOpen={isOpen} />
  );
}
