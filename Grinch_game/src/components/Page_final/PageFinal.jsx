import "./pageFinal.css";
import DrunkenSanta from "../../assets/images/drunken_santa.png";

function dernierepage() {
  return (
    <div className="allpagefinal">
      <p className="text_final">
        Nous vous remercions d'avoir gaché votre noël en notre compagnie
      </p>
      <img src={DrunkenSanta} alt="drunkensanta" className="drunkensanta" />

      <button className>Quitter</button>
    </div>
  );
}

export default dernierepage;
