import cart from "../assets/images/cart.png";
import "../css/cartbubble.css";

export default function CartBubble({ isOpen, setisOpen }) {
  return (
    <div className="cart-bubble">
      <button type="button" onClick={() => setisOpen(!isOpen)}>
        <img src={cart} alt="cart" />
      </button>
    </div>
  );
}
