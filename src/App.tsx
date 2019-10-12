import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Card from "./components/Pokecards/Pokecards";

const App: React.FC = () => {
  return (
    <div className="App">
      <Card />
    </div>
  );
};

export default App;
