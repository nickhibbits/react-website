import Intro from "$/components/Intro";
import About from "$/components/About";
import Work from "$/components/Work";
import Connect from "$/components/Connect";
// import IconNav from "$/components/IconNav";

import appStyles from "$/styles/components/App.module.scss";
import layoutStyles from "$/styles/layout/layout.module.scss";
import ImageTransition from "$/components/ImageTransition";

import ColorFadeTransition from "$/components/ColorFadeTransition";
import { useEffect, useState } from "react";
import { opacitySequenceVariants, transition } from "$/constants/animations";
import { useAnimation, useAnimationControls } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import ImageLoad from "$/components/ImageLoad";
import Loader from "$/components/Loader";

function Home({ updateIntroComplete }: { updateIntroComplete: any }) {
  const [greetingComplete, setGreetingComplete] = useState(false);
  const [previousHover, setPreviousHover] = useState("programmer");
  const [isLoading, setIsLoading] = useState(true);

  const image1stSiblingControls = useAnimation();
  const image2ndSiblingControls = useAnimation();
  const image3rdSiblingControls = useAnimation();

  const title1Controls = useAnimation();
  const title2Controls = useAnimation();
  const title3Controls = useAnimation();

  const handleUpdateGreeting = () => {
    console.log("here");
    setGreetingComplete(true);
  };

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
  }, [
    greetingComplete,
    image1stSiblingControls,
    image2ndSiblingControls,
    image3rdSiblingControls,
    title1Controls,
    title2Controls,
    title3Controls,
  ]);

  const handleHover = (title: string, previousTitle: string) => {
    // console.log("Hover 🟢", title);
    // console.log("previous ", previousTitle);

    if (previousTitle === title) {
      return;
    }

    const hideImage = ["programmer", "sound", "forest"].find((value) => {
      const imageToHide = value !== title && value !== previousTitle;

      // console.log("imageToHide", imageToHide);
      return imageToHide;
    });

    // console.log("hideImage", hideImage);

    switch (hideImage) {
      case "programmer":
        image1stSiblingControls.start(opacitySequenceVariants.hideImage);
        title1Controls.start(opacitySequenceVariants.hideTitle);

        break;

      case "sound":
        image2ndSiblingControls.start(opacitySequenceVariants.hideImage);
        title2Controls.start(opacitySequenceVariants.hideTitle);

        break;
      case "forest":
        image3rdSiblingControls.start(opacitySequenceVariants.hideImage);
        title3Controls.start(opacitySequenceVariants.hideTitle);

        break;
    }

    switch (previousTitle) {
      case "programmer":
        image1stSiblingControls.start(opacitySequenceVariants.fadeImage);
        title1Controls.start(opacitySequenceVariants.titleFadeOut);
        break;
      case "sound":
        image2ndSiblingControls.start(opacitySequenceVariants.fadeImage);
        title2Controls.start(opacitySequenceVariants.titleFadeOut);
        break;
      case "forest":
        image3rdSiblingControls.start(opacitySequenceVariants.fadeImage);
        title3Controls.start(opacitySequenceVariants.titleFadeOut);
        break;
    }

    switch (title) {
      case "programmer":
        title1Controls.start(opacitySequenceVariants.titleFadeIn);
        image1stSiblingControls.start(opacitySequenceVariants.imageHover);

        break;

      case "sound":
        title2Controls.start(opacitySequenceVariants.titleFadeIn);
        image2ndSiblingControls.start(opacitySequenceVariants.imageHover);

        break;

      case "forest":
        title3Controls.start(opacitySequenceVariants.titleFadeIn);
        image3rdSiblingControls.start(opacitySequenceVariants.imageHover);

        break;
    }

    setPreviousHover(title);
  };

  return (
    <>
      {/* {!isLoading ? (
        <>
          <Loader />
          <ImageLoad updateIsLoading={() => setIsLoading(false)} />
        </>
      ) :  */}
      (
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
                handleHover={handleHover}
                previousHover={previousHover}
              />
            </div>

            {greetingComplete ? (
              <>
                <ColorFadeTransition
                  image1stSiblingControls={image1stSiblingControls}
                  image2ndSiblingControls={image2ndSiblingControls}
                  image3rdSiblingControls={image3rdSiblingControls}
                />

                <ImageTransition
                  image1stSiblingControls={image1stSiblingControls}
                  image2ndSiblingControls={image2ndSiblingControls}
                  image3rdSiblingControls={image3rdSiblingControls}
                  updateIntroComplete={updateIntroComplete}
                />
              </>
            ) : null}
          </section>
          <ParallaxProvider scrollAxis="vertical">
            <About />
          </ParallaxProvider>

          <ParallaxProvider scrollAxis="vertical">
            <Work />
          </ParallaxProvider>

          <ParallaxProvider scrollAxis="vertical">
            <Connect />
          </ParallaxProvider>
        </div>
      </div>
      ){/* } */}
    </>
  );
}

export default Home;
