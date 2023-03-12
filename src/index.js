import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import Contact from "./component/Contact";
import NoPage from "./component/NoPage";
import reportWebVitals from "./reportWebVitals";

export default function App1() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Switch>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
