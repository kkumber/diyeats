import { Link } from "react-router-dom";
import Home from "./Home";


const Navbar = () => {
  return (
  <nav className="mx-4 my-4 bg-dark-brown text-white rounded-full px-4 py-2 sticky inset-4">
    <div className="flex justify-between items-center text-base sm:text-xl sm:px-24 md:px-40 md:text-xl">
            <Link to={`/`}>Home</Link>
            <Link to={`/pages/Favorites`}>Favorites</Link>
            <Link to={`/pages/Explore`}>Explore</Link>
    </div>
  </nav>);
};

export default Navbar;