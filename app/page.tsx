import About from "$/components/About";
import Connect from "$/components/Connect";
import Intro from "$/components/Intro/Intro";

import Work from "$/components/Work";

import appStyles from "$/styles/components/App.module.scss";
import layoutStyles from "$/styles/layout/layout.module.scss";

function Home() {
  return (
    <>
      <div className={appStyles.app_container}>
        <div className={layoutStyles.app_component}>
          <div className={layoutStyles.home_container}>
            <Intro />
          </div>
          <About />
          <Work />
          <Connect />
        </div>
      </div>
    </>
  );
}

export default Home;
