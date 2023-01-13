import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes></Routes>
    </div>
  );
}

export default App;
