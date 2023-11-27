import "./PlayerValidation.css";
import { Link } from "react-router-dom";

function PlayerValidation() {
  return (
    <main>
      <Link to="/trolling">
        <div className="title_validation">the players</div>
      </Link>
      <div className="joueur">player 1</div>
      <div className="joueur2">player 2</div>
      <div className="joueur">player 3</div>
      <div className="joueur">player 4</div>
      <Link to="/youplay">
        <button className="btn_player">VALIDER</button>
      </Link>
    </main>
  );
}

export default PlayerValidation;
