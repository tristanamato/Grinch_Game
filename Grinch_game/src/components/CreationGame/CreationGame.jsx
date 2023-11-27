import "./creationGame.css";
import ChelouFlower from "../../assets/images/grinch_10.png";
import { Link } from "react-router-dom";

function CreationGame() {
  return (
    <>
      <img src={ChelouFlower} alt="chelou flower" className="flower_up" />

      <Link to="/creategame">
        <p className="btn_NewGame">nouvelle partie</p>
      </Link>
      <Link to="/joingame">
        <p className="btn_JoinGame">rejoindre</p>
      </Link>
      <img src={ChelouFlower} alt="chelou flower" className="flower_down" />
    </>
  );
}

export default CreationGame;
