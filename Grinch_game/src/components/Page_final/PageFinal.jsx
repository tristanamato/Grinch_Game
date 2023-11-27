/* eslint-disable react/no-unescaped-entities */
import DrunkenSanta from "../../assets/images/drunken_santa.png";
import "./pageFinal.css";
import { Link } from "react-router-dom";

function PageFinal() {
  return (
    <div className="allpagefinal">
      <p className="text_final">
        Nous vous remercions d'avoir gaché votre noël en notre compagnie
      </p>
      <img src={DrunkenSanta} alt="drunkensanta" className="drunkensanta" />
      <Link to="/">
        <button className="btn_quit">Quitter</button>{" "}
      </Link>
    </div>
  );
}

export default PageFinal;
