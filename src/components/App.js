import React, { useEffect, useState } from "react";

import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Work from "./Work";

import "../styles/App.scss";

function App() {
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const [notSmallScreen, setNotSmallScreen] = useState(window.innerWidth > 800);

  const updateMedia = () => {
    setNotSmallScreen(window.innerWidth > 800);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const srcollToSection = (section) => {
    const behavior = "smooth";
    const aboutSection = document.getElementById("about-component");
    const workSection = document.getElementById("work-component");

    switch (section) {
      case "home":
        window.scrollTo({
          top: 0,
          behavior: behavior,
        });
        break;
      case "about":
        window.scrollTo({
          top: aboutSection.offsetTop,
          behavior: behavior,
        });
        break;
      case "work":
        window.scrollTo({
          top: workSection.offsetTop,
          behavior: behavior,
        });
        break;
      default:
        console.log(`ERROR with ref`);
    }
  };

  return (
    <main className="app-component">
      <div className="nav-wrapper">
        <Nav
          navMenuOpen={navMenuOpen}
          setNavMenuOpen={() => setNavMenuOpen(!navMenuOpen)}
          srcollToSection={srcollToSection}
          notSmallScreen={notSmallScreen}
        />
      </div>
      <div className="app-wrapper">
        <Home />
        <About />
        <Work />
      </div>
    </main>
  );
}

export default App;
