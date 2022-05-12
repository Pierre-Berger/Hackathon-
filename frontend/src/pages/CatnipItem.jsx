export default function CatnipItem(props) {
  const { catnipItem } = props;

  return (
    <div>
      <div className="catnipItem-article">
        <h1 className="catnipItem-title">{catnipItem.title}</h1>
        <img
          className="catnipItem-image"
          src={catnipItem.image}
          alt={catnipItem.title}
        />
        <div className="catnipItem-description">{catnipItem.description}</div>
        <div className="catnipItem-information">
          {/* <div className="catnipItem-stars">{drawStars}</div> */}
          <div className="catnipItem-price">{catnipItem.price} €</div>
        </div>
      </div>
    </div>
  );
}
