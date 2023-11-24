import "./homepage.css";
import Grinch_main from "../assets/images/grinch_14.png";

function Homepage() {
  return (
    <div className="homepage">
      <img className="grinch_main" src={Grinch_main} alt="Grinch image" />
      <h1 className="title_sec">on vous aide à pourrir Noël !</h1>
      <a className="start_botton" href="#">
        <p className="botton_title">DEMARRER</p>
      </a>
    </div>
  );
}

export default Homepage;
