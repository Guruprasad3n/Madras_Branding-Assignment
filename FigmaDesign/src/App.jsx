import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import DataContainer from "./components/DataContainer";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <DataContainer />
    </div>
  );
}

export default App;
