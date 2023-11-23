import "./creationGame.css";
import ChelouFlower from "../../assets/images/grinch_10.png"

function creationGame() {
  return (
    <>
    <img src={ChelouFlower} alt="chelou flower" className="flower_up"/>
   
  <p className="btn_NewGame">nouvelle partie
  </p>
  <p className="btn_JoinGame">
    rejoindre 
  </p>
  <img src={ChelouFlower} alt="chelou flower" className="flower_down"/>
  </>

  );
}

export default creationGame;
