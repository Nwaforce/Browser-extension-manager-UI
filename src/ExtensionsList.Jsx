import React, { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import "./styles.css";

const ExtensionsList = () => {
  const [extensions, setExtensions] = useState([]);
  const [filter, setFilter] = useState("active");

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setExtensions(data));
  }, []);

  const toggleExtension = (index) => {
    setExtensions((prev) => {
      const updated = [...prev];
      updated[index].isActive = !updated[index].isActive;
      return updated;
    });
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Extensions List</h1>
        <div className="filter-buttons">
          <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>All</button>
          <button className={filter === "active" ? "active" : ""} onClick={() => setFilter("active")}>Active</button>
          <button className={filter === "inactive" ? "active" : ""} onClick={() => setFilter("inactive")}>Inactive</button>
        </div>
      </div>
      <div className="grid">
        {extensions.filter(ext => (filter === "all" || (filter === "active" ? ext.isActive : !ext.isActive))).map((ext, index) => (
          <div key={index} className={`card ${ext.isActive ? "active-card" : "inactive-card"}`}>
            <div className="card-header">
              <img src={ext.logo} alt={ext.name} className="logo" />
              <h2>{ext.name}</h2>
            </div>
            <p>{ext.description}</p>
            <div className="card-footer">
              <button className="remove-button" onClick={() => toggleExtension(index)}>Remove</button>
              <Switch
                checked={ext.isActive}
                onChange={() => toggleExtension(index)}
                className={`toggle ${ext.isActive ? "toggle-on" : "toggle-off"}`}
              >
                <span className="toggle-thumb" />
              </Switch>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtensionsList;
