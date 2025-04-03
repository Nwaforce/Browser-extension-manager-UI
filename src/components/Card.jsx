import React from "react";
import "../styles.css";

const Card = ({ extension, onToggle, onRemove }) => {
  return (
    <div className={`card ${extension.isActive ? "active" : "inactive"}`}>
      <img src={extension.logo} alt={extension.name} className="card-logo" />
      <div className="card-content">
        <h2>{extension.name}</h2>
        <p>{extension.description}</p>
        <div className="card-actions">
          <button className="remove-btn" onClick={onRemove}>Remove</button>
          <label className="switch">
            <input type="checkbox" checked={extension.isActive} onChange={onToggle} />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Card;
