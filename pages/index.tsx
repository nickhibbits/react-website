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
import { useAnimation, useAnimationControls } from "framer-motion";

function Home({ updateIntroComplete }: { updateIntroComplete: any }) {
  const width = useWindowCheck();
  const [greetingComplete, setGreetingComplete] = useState(false);

  const image1stSiblingControls = useAnimation();
  const image2ndSiblingControls = useAnimation();
  const image3rdSiblingControls = useAnimation();
  // const colorControls = useAnimation();
  const title1Controls = useAnimation();
  const title2Controls = useAnimation();
  const title3Controls = useAnimation();

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

  useEffect(() => {
    title1Controls.start(opacitySequenceVariants.title1);
    image1stSiblingControls.start(
      opacitySequenceVariants.image1stSiblingInitial
    );
    title2Controls.start(opacitySequenceVariants.title2);
    image2ndSiblingControls.start(
      opacitySequenceVariants.image2ndSiblingInitial
    );
    title3Controls.start(opacitySequenceVariants.title3);
    image3rdSiblingControls.start(
      opacitySequenceVariants.image3rdSiblingInitial
    );
  }, [greetingComplete]);

  if (width) {
    return (
      <div className={appStyles.app_container}>
        <div className={layoutStyles.app_component}>
          <section className={layoutStyles.home_container} id="home_container">
            <div className={appStyles.intro_wrapper}>
              <Intro
                title1Controls={title1Controls}
                title2Controls={title2Controls}
                title3Controls={title3Controls}
                greetingComplete={greetingComplete}
                updateGreeting={handleUpdateGreeting}
              />
            </div>

            {greetingComplete ? (
              <>
                <ColorFadeTransition
                  image1stSiblingControls={image1stSiblingControls}
                  image2ndSiblingControls={image2ndSiblingControls}
                  image3rdSiblingControls={image3rdSiblingControls}
                />

                {/* <IconNav /> */}

                <ImageTransition
                  image1stSiblingControls={image1stSiblingControls}
                  image2ndSiblingControls={image2ndSiblingControls}
                  image3rdSiblingControls={image3rdSiblingControls}
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
