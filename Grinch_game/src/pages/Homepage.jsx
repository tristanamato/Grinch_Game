<<<<<<< HEAD
function Homepage() {
  return <div>Je suis une Homepage</div>;
}

=======

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
>>>>>>> 711d5e834408c14454619f52fe6c9ec40b9381b6
export default Homepage;
