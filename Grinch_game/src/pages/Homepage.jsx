import "./homepage.css";
import Grinch_main from "../assets/images/grinch_14.png";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="homepage">
      <img className="grinch_main" src={Grinch_main} alt="Grinch image" />
      <h1 className="title_sec">on vous aide à pourrir Noël !</h1>
      <Link to="/menu" className="start_botton" href="#">
        <p className="botton_title">DEMARRER</p>
      </Link>
    </div>
  );
}
export default Homepage;
