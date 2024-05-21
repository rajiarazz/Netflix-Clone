import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import caret_icon from "../../assets/caret_icon.svg";
import profile_img from "../../assets/profile_img.png";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img className="logo" src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TVShows</li>
          <li>Movies</li>
          <li>New&Popular</li>
          <li>MyList</li>
          <li>Brows by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="" className='icons' />
        <p>children</p>
        <img src={bell_icon} alt="" className='icons' />
        <div className="navbar-profile">
          <img src={profile_img} alt="" className="profile" />
          <img src={caret_icon} alt="" />
          <div className="dropdown">
            <p>Sign out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
