import "./menu.css";
import Grinch_menuPage from "../../assets/images/grinch_13.png";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <div className="menu">
      <Link to="/creationgame" className="border_btn" href="#">
        <p className="btn">Nouvelle Partie</p>
      </Link>
      <a className="border_btn" href="#">
        <p className="btn">Comment jouer</p>
      </a>
      <a className="border_btn" href="#">
        <p className="btn">Les Grinchs conseils</p>
      </a>
      <img
        className="GrinchMenuImg"
        src={Grinch_menuPage}
        alt="Grinch MenuImage"
      />
    </div>
  );
}
export default Menu;
