import React from "react";
import "../styles.css";
import { FaCog } from "react-icons/fa";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Extensions Logo" />
        <span>Extensions</span>
      </div>
      <input type="text" className="navbar-search" placeholder="Search..." />
      <button className="navbar-toggle">
        <FaCog />
      </button>
    </nav>
  );
};

export default Navbar;