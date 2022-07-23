import { Fragment, useState } from "react";

import Nav from "./Nav";
import Socials from "./Socials";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

import "../styles/App.css";

function App() {
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  return (
    <Fragment className="app-component">
      <div className="nav-socials-wrapper">
        <Nav
          navMenuOpen={navMenuOpen}
          setNavMenuOpen={() => setNavMenuOpen(!navMenuOpen)}
        />
        <Socials />
      </div>
      <div className="app-wrapper">
        <Home />
        <About />
        <Projects />
      </div>
    </Fragment>
  );
}

export default App;
