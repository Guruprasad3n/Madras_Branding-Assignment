import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import DataContainer from "./components/DataContainer";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <DataContainer />
      <ProductPage />
    </div>
  );
}

export default App;
