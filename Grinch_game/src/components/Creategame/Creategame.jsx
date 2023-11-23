import React from "react";
import "./creategame.css";
import Grinch_18 from "../../assets/images/grinch_18.png";

function Creategame() {
  return (
    <div className="Creategame">
      <div className="game-info">
        <div className="game-code">GAME CODE</div>
        <div className="game-number">#666</div>
      </div>
      <div className="input-name">
        <input type="text" placeholder="entrez votre nom" />
      </div>
      <button className="valider">Valider</button>
      <img className="grinch_18" src={Grinch_18} alt="Grinch_image" />
    </div>
  );
}

export default Creategame;
