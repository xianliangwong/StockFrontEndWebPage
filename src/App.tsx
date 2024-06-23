import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./Compoments/CardList/CardList";
import Search from "./Compoments/Search/Search";

function App() {
  return (
    <div className="App">
      <Search />
      <CardList />
    </div>
  );
}

export default App;
