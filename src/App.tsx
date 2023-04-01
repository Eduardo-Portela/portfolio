import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { GlobalStyle } from "./styles/globalStyles";
import { RoutesMain as Routes } from "./routes/routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
