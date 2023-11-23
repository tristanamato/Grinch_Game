import "./menu.css";
import Grinch_menuPage from "../../assets/images/grinch_13.png";
function Menu() {
  return (
    <div className="menu">
      <a className="border_btn" href="#">
        <p className="btn">Nouvelle Partie</p>
      </a>
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
