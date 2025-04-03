import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data.json";
import "./styles.css";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [extensions, setExtensions] = useState(data);
  const [filter, setFilter] = useState("all");

  // Handle Theme Toggle
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Handle Activation/Deactivation
  const toggleActivation = (index) => {
    setExtensions((prevExtensions) =>
      prevExtensions.map((ext, i) =>
        i === index ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };

  // Handle Remove Extension
  const removeExtension = (index) => {
    setExtensions((prevExtensions) =>
      prevExtensions.filter((_, i) => i !== index)
    );
  };

  // Filter Extensions Based on Selection
  const filteredData =
    filter === "all"
      ? extensions
      : extensions.filter((item) => item.isActive === (filter === "active"));

  return (
    <div className="container">
      <Navbar theme={theme} toggleTheme={handleToggleTheme} />
      <div className="ListContainer">
        <h1>Extensions List</h1>
        <div className="filters">
          <button
            onClick={() => setFilter("all")}
            className={filter === "all" ? "active" : ""}
          >
            All
          </button>
          <button
            onClick={() => setFilter("active")}
            className={filter === "active" ? "active" : ""}
          >
            Active
          </button>
          <button
            onClick={() => setFilter("inactive")}
            className={filter === "inactive" ? "active" : ""}
          >
            Inactive
          </button>
        </div>
      </div>

      <div className="cards-container">
        {filteredData.map((extension, index) => (
          <Card
            key={index}
            extension={extension}
            onToggle={() => toggleActivation(index)}
            onRemove={() => removeExtension(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
