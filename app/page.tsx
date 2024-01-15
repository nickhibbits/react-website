import About from "$/components/About/About";
import Connect from "$/components/Connect/Connect";
import Intro from "$/components/Intro/Intro";

import Work from "$/components/Work/Work";

import layoutStyles from "$/styles/layout/layout.module.scss";

function Home() {
  return (
    <div className={layoutStyles.app_component}>
      <Intro />
      <About />
      <Work />
      <Connect />
    </div>
  );
}

export default Home;
