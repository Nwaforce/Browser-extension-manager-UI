import React from "react";
import "../styles.css";

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo">🔗 Extensions</div>
      </div>
      <div className="nav-right">
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
