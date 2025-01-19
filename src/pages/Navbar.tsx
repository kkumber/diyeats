import { Link } from "react-router-dom";
import Home from "./Main/Home";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname


  

  return (
  <nav className="mx-4 my-4 bg-dark-brown rounded-full px-4 py-2 sticky inset-4">
    <div className="flex justify-between items-center text-base text-white sm:text-xl sm:px-24 md:px-40">
            <Link to={`/`} className={`${path == '/' ? 'font-bold' : '' }`}>Home</Link>
            <Link to={`/pages/Favorites`} className={`${path == '/pages/Favorites' ? 'font-bold' : '' }`}>Favorites</Link>
            <Link to={`/pages/Explore`} className={`${path == '/pages/Explore' ? 'font-bold' : ''}`}>Explore</Link>
    </div>
  </nav>);
};
 
export default Navbar;