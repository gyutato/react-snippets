import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import Header from "./components/Header";

import "./App.css";
import Body from "./templates/Body";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Body />
      </div>
    </>
  );
}

export default App;
