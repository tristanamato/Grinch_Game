import "./playerclassement.css"
import grinch_12 from "../../assets/images/grinch_12.png"
import santaclaus2 from "../../assets/images/santaclaus2.png"

function PlayerClassement() {
  return(
    <main>
    <div className="title_validation2">
      CLASSEMENT
    </div>
    <img className="Grinch_valid" src={grinch_12} alt="Grinch_valid" />
    <div className="joueur4">player 4</div>
    <div className="joueur8">player 2</div>
    <div className="joueur1">player 1</div>
    <div className="joueur3">player 3</div>
    <img className="santaclaus2" src={santaclaus2} alt="santaclaus2" />
    <button className="btn2">SUIVANT</button>
    </main>
  )
}

export default PlayerClassement;
