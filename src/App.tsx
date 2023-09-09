import React from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import Add from "./components/Add";

function App() {
  return (
    <div className="App">
      <Add></Add>
      <List></List>
    </div>
  );
}

export default App;
