import "./youplay.css";
import Grinch from "../../assets/images/grinch_19.png";
import GrinchFight from "../../assets/images/grinch_3.png";
import { Link } from "react-router-dom";

function YouPlay() {
  return (
    <main>
      <div className="title_question">
        <p className="title_play"> YOU PLAY</p>
        <img className="grinch_19" src={Grinch} alt="grinch_19" />
      </div>

      <p className="question">Sous sa hôte, le père noël a </p>

      <input className="false_input"></input>
      <Link to="/winlose">
        <div className="playbtn">
          <p>VALIDER</p>
        </div>
      </Link>
      <img
        className="Grinch_bottom_question"
        src={GrinchFight}
        alt="GrinchFight"
      />
    </main>
  );
}

export default YouPlay;
