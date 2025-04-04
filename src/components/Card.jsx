import React from "react";
import "../styles.css";

const Card = ({ extension, onToggle, onRemove }) => {
  return (
    <div className={`card ${extension.isActive ? "active" : "inactive"}`}>
       <div className="card-content">
       <img src={extension.logo} alt={extension.name} className="card-logo" />
        <div>
        <h2>{extension.name}</h2>
        <p>{extension.description}</p>
        </div>
        </div>
        <div className="card-actions">
          <button className="remove-btn" onClick={onRemove}>Remove</button>
          <label className="switch">
            <input type="checkbox" checked={extension.isActive} onChange={onToggle} />
            <span className="slider"></span>
          </label>
        
      </div>
    </div>
  );
};

export default Card;
