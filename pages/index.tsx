import Intro from "$/components/Intro";
import About from "$/components/About";
import Work from "$/components/Work";
import Connect from "$/components/Connect";
// import IconNav from "$/components/IconNav";

import appStyles from "$/styles/components/App.module.scss";
import layoutStyles from "$/styles/layout/layout.module.scss";
import ImageTransition from "$/components/ImageTransition";

import { useWindowCheck } from "$/utils/customHooks";

import ColorFadeTransition from "$/components/ColorFadeTransition";

function Home() {
  const width = useWindowCheck();

  const opacitySequence = {
    imageBase: { opacity: [0, 1, 1, 1, 0, 1] },
    imageSibling: { opacity: [0, 1, 1, 1, 0] },
    title: { opacity: [0, 1, 1] },
  };
  const transition = (delay: number) => {
    return {
      imageBase: { duration: 5, delay },
      imageSibling: { duration: 5, delay },
      titleGroup: { duration: 5, delay },
      titleSibling: { duration: 2, delay },
    };
  };

  if (width) {
    return (
      <div className={appStyles.app_container}>
        <div className={layoutStyles.app_component}>
          <section className={layoutStyles.home_container} id="home_container">
            <div className={appStyles.intro_wrapper}>
              <Intro
                animationSequecence={opacitySequence.title}
                transition={transition}
              />
            </div>

            <ColorFadeTransition
              animationSequecence={opacitySequence}
              transition={transition}
            />

            {/* <IconNav /> */}

            <ImageTransition
              animationSequecence={opacitySequence}
              transition={transition}
            />
          </section>
          <About />
          <Work />
          <Connect />
        </div>
      </div>
    );
  }
}

export default Home;
