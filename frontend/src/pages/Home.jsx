import { Link } from "react-router-dom";
import "../css/home.css";
import gif1 from "../assets/gif1.gif";
import croix from "../assets/croix.png";

export default function Home() {
  return (
    <div className="container">
      <div className="title">
        <h2>Marmithon </h2>
        <img className="croixtitle" src={croix} alt="logo" />
        <h2>Chat&#39;Perché</h2>
      </div>
      <div className="gifcontainer">
        <img className="gif" src={gif1} alt="logo" />
      </div>
      <div className="linkcontainer">
        <div className="btn-marmithon">
          <Link to="/recipes">
            <button className="btn-link" type="button">
              Marmithon
            </button>
          </Link>
        </div>
        <div className="btn-shop">
          <Link to="/shop">
            <button className="btn-link" type="button">
              Chat&#39;Perché
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
