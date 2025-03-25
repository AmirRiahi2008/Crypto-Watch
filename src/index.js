import React from "react";
import ReactDOM from "react-dom";
import Main from "./Components/Main.jsx";
import { BrowserRouter } from "react-router-dom";
//import css
import "./css/style.css";
ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById("root")
);
