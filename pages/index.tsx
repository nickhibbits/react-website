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
import { useEffect, useState } from "react";
import { opacitySequenceVariants, transition } from "$/constants/animations";
import { useAnimation } from "framer-motion";

function Home({ updateIntroComplete }: { updateIntroComplete: any }) {
  const width = useWindowCheck();
  const [greetingComplete, setGreetingComplete] = useState(false);

  const imageControls = useAnimation();
  const colorControls = useAnimation();
  const titleControls = useAnimation();

  const handleUpdateGreeting = () => {
    setGreetingComplete(true);
  };

  // const handleHoverState = (title: string) => {
  //   switch (title) {
  //     case "programmer":
  //       break;

  //     case "forest":
  //       break;

  //     default:
  //       "sound";
  //       break;
  //   }
  // };

  if (width) {
    return (
      <div className={appStyles.app_container}>
        <div className={layoutStyles.app_component}>
          <section className={layoutStyles.home_container} id="home_container">
            <div className={appStyles.intro_wrapper}>
              <Intro
                animationSequecence={opacitySequenceVariants}
                greetingComplete={greetingComplete}
                updateGreeting={handleUpdateGreeting}
                // handleHoverState={handleHoverState}
              />
            </div>

            {greetingComplete ? (
              <>
                <ColorFadeTransition
                  animationSequecence={opacitySequenceVariants}
                />

                {/* <IconNav /> */}

                <ImageTransition
                  animationSequecence={opacitySequenceVariants}
                  updateIntroComplete={updateIntroComplete}
                />
              </>
            ) : null}
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
