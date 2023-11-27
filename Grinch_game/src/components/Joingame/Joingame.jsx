import "./joingame.css";
import Grinch_2 from "../../assets/images/grinch_2.png";
import { Link } from "react-router-dom";

function Joingame() {
  return (
    <div className="Joingame">
      <div className="game-input">
        <div className="game-input-code">SAISIR LE GAME CODE</div>
        <input className="game-number-input" />
      </div>
      <div className="input-name1">
        <div className="input-name2">PLAYER2</div>
      </div>
      <Link to="/playervalidation" className="valider-join-game">
        Valider
      </Link>
      <img className="grinch_2" src={Grinch_2} alt="Grinch_image" />
    </div>
  );
}

export default Joingame;
