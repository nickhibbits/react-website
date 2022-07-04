import { Routes, Route } from "react-router-dom";
import "../styles/App.css";
import Nav from "./Nav";
import Socials from "./Socials";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import { useState } from "react";

function App() {
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  return (
    <div className="app-component">
      <Nav
        navMenuOpen={navMenuOpen}
        setNavMenuOpen={() => setNavMenuOpen(!navMenuOpen)}
      />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/projects" exact element={<Projects />} />
      </Routes>
      <Socials />
    </div>
  );
}

export default App;
