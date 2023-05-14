import React from "react";
import "./Header.css";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";



const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <ul>
          <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
          </li>
          <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
          </li>
          <li>
            <NavLink to="/testimonials" activeClassName="active">Testimonials</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active" >Contact</NavLink>
          </li>
          <li>
            <NavLink to="/blog" activeClassName="active" >Blog</NavLink>
          </li>
          <li>
            <NavLink to="/casestudies" activeClassName="active" >Casestudies</NavLink>
          </li>
        </ul>
      </div>
      <div className="header-left">
        
      </div>
    </div>
  );
};

export default Header;
