/* eslint-disable react/no-unescaped-entities */
import "./winlose.css";
import Poo from "../../assets/images/grinch_4.png";
import Grinch_scream from "../../assets/images/grinch_6.png";
import { Link } from "react-router-dom";
function WinLose() {
  return (
    <>
      <div className="player_four">
        <div className="img_heading">
          <img className="poo" src={Poo} alt="Grinch Poo" />
          <h1 className="player_heading">PLAYER 4</h1>
        </div>
        <p className="para_first">boit un shot</p>
      </div>
      <div className="player_three">
        <div className="img_heading">
          <img
            className="grinch_scream"
            src={Grinch_scream}
            alt="Grinch scream"
          />
          <h1 className="player_heading_sec">PLAYER 3</h1>
        </div>
        <p className="para_sec">
          Envoie à son crush un sms pour lui "j'ai besoin de te parler"{" "}
        </p>
      </div>
      <Link to="/playerclassement">
        <div className="btn_next">
          <p>SUIVANT</p>
        </div>
      </Link>
    </>
  );
}

export default WinLose;
