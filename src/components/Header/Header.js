import React from "react";
import "./Header.css";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="header">
      <div className="header-name">
        <h2>JISHNU NP</h2>
      </div>
      <div className="header-links">
        <ul>
        <Link to={'/'}> <li>Home</li></Link>
          
        <Link to={'About'}><li>About</li></Link>
       
          <Link to={'services'}><li>Services</li></Link>
          <Link to={'contact'}> <li>Contact</li></Link>
        </ul>
        <Link to={'contact'}><button>Hire me</button></Link>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            className="navbar_menu-icon"
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            className="navbar_menu-icon"
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar_menu-links ">
            <div>
              <ul>
                <Link to={'/'}> <li>Home</li></Link>
                <Link to={'About'}><li>About</li></Link>
                <Link to={'services'}><li>Services</li></Link>
                <Link to={'contact'}><li>Contact</li></Link>
              </ul>
            </div>
            <div>
            <Link to={'contact'}><button>Hire me</button></Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
