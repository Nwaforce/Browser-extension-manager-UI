import React from "react";
import "../styles.css";

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="logo">🔗 Extensions</div>
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === "dark" ? "🌙" : "☀️"}
      </button>
    </nav>
  );
};

export default Navbar;
