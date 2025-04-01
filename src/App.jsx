import React, { useState, useEffect } from "react";
import Toggle from "./components/Toggle";
import Card from "./components/Card";

const App = () => {
  const [extensions, setExtensions] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setExtensions(data));
  }, []);

  const toggleActive = (index) => {
    setExtensions((prev) => {
      const updated = [...prev];
      updated[index].isActive = !updated[index].isActive;
      return updated;
    });
  };

  return (
    <div className="container">
      <header>
        <h1>Extensions Dashboard</h1>
     <Toggle />
      </header>
      <div className="grid">
        {extensions.map((ext, index) => (
          <Card key={index} {...ext} toggleActive={() => toggleActive(index)} />
     
        ))}
      </div>
    </div>
  );
};

export default App;
