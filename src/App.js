import Title from "./component/Title";
import Header from "./component/Header";
import Home from "./component/Home";
import Contact from "./component/Contact";
import NoPage from "./component/NoPage";
import Auth from "./component/Auth";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import "./style/Title.css";
import "./style/Header.css";
import "./style/Auth.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/auth" component={Auth} />
          </div>
        </Switch>
    </Router>
  );
}

export default App;
