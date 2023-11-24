import "./trolling.css";
import Grinch from "../../assets/images/grinch.png";
import SantaClaus from "../../assets/images/pere-noel.png";

function Trolling() {
  return (
    <section id="trolling">
      <p className="title_trolling">YOU TROLL</p>
      <div className="Player_answer">
        <div className="top_line">
          <p className="troll_player_name">player 2</p>
          <div className="win_loose_ico">
            <img src={Grinch} alt="Win" className="grinch_ico" />
            <img src={SantaClaus} alt="loose" className="santa_ico" />
          </div>
        </div>
        <p className="play_answer">
          “ Sous sa hôte, le père noël a{" "}
          <span className="colored_answer">une grosse mite</span>.“
        </p>
        <div className="dashed_line"></div>
      </div>
      <div className="Player_answer">
        <div className="top_line">
          <p className="troll_player_name">player 3</p>
          <div className="win_loose_ico">
            <img src={Grinch} alt="Win" className="grinch_ico" />
            <img src={SantaClaus} alt="loose" className="santa_ico" />
          </div>
        </div>
        <p className="play_answer">
          “ Sous sa hôte, le père noël a{" "}
          <span className="colored_answer">un nain primordial</span>.“
        </p>
        <div className="dashed_line"></div>
      </div>
      <div className="Player_answer">
        <div className="top_line">
          <p className="troll_player_name">player 4</p>

          <div className="win_loose_ico">
            <img src={Grinch} alt="Win" className="grinch_ico" />
            <img src={SantaClaus} alt="loose" className="santa_ico" />
          </div>
        </div>
        <p className="play_answer">
          “ Sous sa hôte, le père noël a{" "}
          <span className="colored_answer">un prépuce géant</span>.“
        </p>
      </div>
      <p className="troll_validate">VALIDER</p>
    </section>
  );
}

export default Trolling;
