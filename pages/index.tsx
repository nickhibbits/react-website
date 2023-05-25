import Intro from "$/components/Intro";
import About from "$/components/About";
import Work from "$/components/Work";
import Connect from "$/components/Connect";
import IconNav from "$/components/IconNav";

import appStyles from "$/styles/components/App.module.scss";
import layoutStyles from "$/styles/layout/layout.module.scss";
import ImageTransition from "$/components/ImageTransition";

function Home() {
  return (
    <div className={appStyles.app_container}>
      <div className={layoutStyles.app_component}>
        <section className={layoutStyles.home_container} id="home_container">
          <div className={appStyles.intro_wrapper}>
            <Intro />
          </div>
          <div className={appStyles.box_fade}>{/* <IconNav /> */}</div>
          <ImageTransition />
        </section>
        <About />
        <Work />
        <Connect />
      </div>
    </div>
  );
}

export default Home;
