import { useState } from "react";
import { useInitialAnimation } from "$/utils/customHooks/useInitialAnimation";
import { useHoverAnimation } from "$/utils/customHooks/useHoverAnimation";

import ColorFadeTransition from "$/components/ColorFadeTransition";
import ImageTransition from "$/components/ImageTransition";
import Intro from "$/components/Intro";

import appStyles from "$/styles/components/App.module.scss";
import layoutStyles from "$/styles/layout/layout.module.scss";

function InitialAnimation({
  updateIntroComplete,
}: {
  updateIntroComplete: any;
}) {
  const [previousHover, setPreviousHover] = useState("programmer");

  const [
    greetingComplete,
    handleUpdateGreeting,
    image1stSiblingControls,
    image2ndSiblingControls,
    image3rdSiblingControls,
    title1Controls,
    title2Controls,
    title3Controls,
  ] = useInitialAnimation();

  const animationElements = {
    images: {
      image1stSiblingControls,
      image2ndSiblingControls,
      image3rdSiblingControls,
    },
    titles: { title1Controls, title2Controls, title3Controls },
  };

  const { handleHover } = useHoverAnimation(
    animationElements,
    setPreviousHover
  );

  return (
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
  );
}

export default InitialAnimation;
