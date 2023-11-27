import "./creategame.css";
import Grinch_18 from "../../assets/images/grinch_18.png";
import { Link } from "react-router-dom";

function Creategame() {
  return (
    <div className="Creategame">
      <div className="game-info">
        <div className="game-code">GAME CODE</div>
        <div className="game-number">#666</div>
      </div>
      <div className="input-toto-name">
        <div className="toto_input"> PLAYER1</div>
      </div>
      <Link to="/playervalidation" className="valider-create-game ">
        Valider
      </Link>
      <div className="grinch-position-toto">
        <img className="grinch_18" src={Grinch_18} alt="Grinch_image" />
      </div>
    </div>
  );
}

export default Creategame;
