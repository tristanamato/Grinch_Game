import "./joingame.css";
import Grinch_2 from "../../assets/images/grinch_2.png";

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
      <div className="valider-join-game">Valider</div>
      <img className="grinch_2" src={Grinch_2} alt="Grinch_image" />
    </div>
  );
}

export default Joingame;
