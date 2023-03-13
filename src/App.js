import Title from "./component/Title";
import Header from "./component/Header";
import Home from "./component/Home";
import Contact from "./component/Contact";
import NoPage from "./component/NoPage";
import Auth from "./component/Auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./style/Title.css";
import "./style/Header.css";
import "./style/Auth.css";
import "./style/Banner.css";
import "./style/Product.css";
import "./style/Common.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/auth" component={Auth} />
          <Route exact path="*" component={NoPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
