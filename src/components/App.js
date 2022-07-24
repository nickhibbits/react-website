import { Fragment, useState } from "react";

import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Work from "./Work";

import "../styles/App.css";

function App() {
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  return (
    <Fragment className="app-component">
      <div className="nav-wrapper">
        <Nav
          navMenuOpen={navMenuOpen}
          setNavMenuOpen={() => setNavMenuOpen(!navMenuOpen)}
        />
      </div>
      <div className="app-wrapper">
        <Home />
        <About />
        <Work />
      </div>
    </Fragment>
  );
}

export default App;
