import React, { useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import About from "$/components/About";
import Connect from "$/components/Connect";
import InitialAnimation from "$/components/InitialAnimation";
import Work from "$/components/Work";

import appStyles from "$/styles/components/App.module.scss";
import layoutStyles from "$/styles/layout/layout.module.scss";
import Navbar from "$/components/Nav/Navbar";

function MainPage() {
  const [introComplete, updateIntroComplete] = useState(false);

  return (
    <>
      {introComplete ? <Navbar /> : null}
      <div className={appStyles.app_container}>
        <div className={layoutStyles.app_component}>
          <InitialAnimation updateIntroComplete={updateIntroComplete} />
          <ParallaxProvider scrollAxis="vertical">
            <About />
            <Work />
            <Connect />
          </ParallaxProvider>
        </div>
      </div>
    </>
  );
}

export default MainPage;
