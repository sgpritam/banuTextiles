import Title from "./component/Title";
import Header from "./component/Header";
import Home from "./component/Home";
import Contact from "./component/Contact";
import NoPage from "./component/NoPage";

import "./style/Title.css";
import "./style/Header.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Contact />
      <NoPage />
    </div>
  );
}

export default App;
