import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./component/Home";
import Contact from "./component/Contact";
import NoPage from "./component/NoPage";
import {StrictMode } from "react";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode> 
    <Router> 
      <App /> 
   </Router> 
</StrictMode>,
);
reportWebVitals();
