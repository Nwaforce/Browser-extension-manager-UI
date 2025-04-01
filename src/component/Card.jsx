import React from "react";
import "../styles.css";

const Card = ({ logo, name, description, isActive, toggleActive }) => {
  return (
    <div className={`card ${isActive ? "active-card" : "inactive-card"}`}>
      <div className="card-header">
        <img src={logo} alt={name} className="logo" />
        <h2>{name}</h2>
      </div>
      <p>{description}</p>
      <div className="card-footer">
        <button className="remove-button" onClick={toggleActive}>
          {isActive ? "Disable" : "Enable"}
        </button>
      </div>
    </div>
  );
};

export default Card;
