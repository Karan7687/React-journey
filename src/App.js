import React from "react";
import "./components/GoalList/GoalList";
import GoalList from "./components/GoalList/GoalList";

const App = () => {
  const arr = [
    { id: 1, text: "SONY" },
    { id: 2, text: "BOAT" },
    { id: 3, text: "JBL" },
    { id: 4, text: "APPLE" },
  ];

  return (
    <div>
      <h1>This is from the App.js</h1>
      <h1>Second Command</h1>
      <GoalList goals={arr} />
    </div>
  );
};

export default App;
