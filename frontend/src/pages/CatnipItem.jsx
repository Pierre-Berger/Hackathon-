import catnipItems from "../assets/catnipItems";
import "../css/catnipItem.css";

export default function CatnipItem() {
  const handleClick = () => {};

  return (
    <div>
      <div className="catnipItem-article">
        <h1 className="catnipItem-title">{catnipItems[3].title}</h1>
        <img
          className="catnipItem-image"
          src={catnipItems[3].image}
          alt={catnipItems[3].title}
        />
        <div className="catnipItem-description">
          <ul>
            {catnipItems[3].description.map((el) => (
              <li>{el}</li>
            ))}
          </ul>
        </div>
        <div className="catnipItem-information">
          <div className="catnipItem-stars">
            {"★".repeat(catnipItems[3].starNumber)}/5
          </div>
          <div className="catnipItem-price">{catnipItems[3].price} €</div>
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
