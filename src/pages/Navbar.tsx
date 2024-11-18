import { Link } from "react-router-dom";
import Home from "./Home";

const Navbar = () => {
  return (
  <nav>
    <div className="navbarContainer">
        <div className="homeContainer">
            <Link to={`/`}>Home</Link>
            <Link to={`/pages/Favorites`}>Favorites</Link>
        </div>
    </div>
  </nav>);
};

export default Navbar;