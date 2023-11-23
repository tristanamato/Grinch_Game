import DrunkenSanta from "../../assets/images/drunken_santa.png";
import "./pageFinal.css";

function PageFinal() {
  return (
    <div className="allpagefinal">
      <p className="text_final">
        Nous vous remercions d'avoir gaché votre noël en notre compagnie
      </p>
      <img src={DrunkenSanta} alt="drunkensanta" className="drunkensanta" />

      <button className="btn_quit" >Quitter</button>
    </div>
  );
}

export default PageFinal;
