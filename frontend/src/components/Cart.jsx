import { useState } from "react";
import CartBubble from "./CartBubble";
import "../css/cart.css";

export default function Cart({ catnipItems, cart, cartUpdater }) {
  const [isOpen, setisOpen] = useState(false);
  const itemsInCart = catnipItems.filter((e) => cart[e.id] > 0);

  let total = 0;
  for (let i = 0; i < catnipItems.length; i += 1) {
    total += catnipItems[i].price * cart[i];
  }

  return isOpen ? (
    <div className="cart-component">
      <CartBubble setisOpen={setisOpen} isOpen={isOpen} />
      <h2>Panier</h2>
      {cart.reduce((a, b) => a + b) > 0 ? (
        <div className="cart-content-container">
          {itemsInCart.map((e) => (
            <div className="cart-content">
              <div className="article-cart">
                <h3>Article</h3>
                <div>{`${e.title}`}</div>
              </div>
              <div className="quantity-cart">
                <h3>Quantité</h3>
                <div>{cart[e.id]}</div>
              </div>
              <div className="modif">
                <h3>- / +</h3>
                <div>
                  <button
                    type="button"
                    onClick={() => cartUpdater(e.id, false)}
                  >
                    -
                  </button>
                  <button type="button" onClick={() => cartUpdater(e.id, true)}>
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}

          <h3 className="total">{`Total : ${total}€`}</h3>
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
