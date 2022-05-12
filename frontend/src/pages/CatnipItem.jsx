import catnipItems from "../assets/catnipItems";

export default function CatnipItem() {
  return (
    <div>
      <div className="catnipItem-article">
        <h1 className="catnipItem-title">{catnipItems[0].title}</h1>
        <img
          className="catnipItem-image"
          src={catnipItems[0].image}
          alt={catnipItems[0].title}
        />
        <div className="catnipItem-description">
          <ul>
            {catnipItems[0].description.map((el) => (
              <li>{el}</li>
            ))}
          </ul>
        </div>
        <div className="catnipItem-information">
          {/* <div className="catnipItem-stars">{drawStars}</div> */}
          <div className="catnipItem-price">{catnipItems[0].price} €</div>
        </div>
      </div>
    </div>
  );
}
