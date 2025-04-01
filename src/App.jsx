import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data.json";
import "./styles.css";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const filteredData =
    filter === "all"
      ? data
      : data.filter((item) => item.isActive === (filter === "active"));

  return (
    <div className="container">
      <Navbar theme={theme} toggleTheme={handleToggleTheme} />
     <div className="ListContainer">
     <h1>Extensions List</h1>
      <div className="filters">
        <button onClick={() => setFilter("all")} className={filter === "all" ? "active" : ""}>All</button>
        <button onClick={() => setFilter("active")} className={filter === "active" ? "active" : ""}>Active</button>
        <button onClick={() => setFilter("inactive")} className={filter === "inactive" ? "active" : ""}>Inactive</button>
      </div>
     </div>
      <div className="cards-container">
        {filteredData.map((extension, index) => (
          <Card key={index} extension={extension} />
        ))}
      </div>
    </div>
  );
};

export default App;