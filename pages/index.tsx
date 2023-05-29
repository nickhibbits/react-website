// import Intro from "$/components/Intro";
import About from "$/components/About";
import Work from "$/components/Work";
import Connect from "$/components/Connect";
// import IconNav from "$/components/IconNav";

import appStyles from "$/styles/components/App.module.scss";
import layoutStyles from "$/styles/layout/layout.module.scss";
// import ImageTransition from "$/components/ImageTransition";
import { useAnimation } from "framer-motion";
import { useWindowCheck } from "$/utils/customHooks";
import treesImage from "$/public/images/trees-overhead-min.jpg";
import dialsImage from "$/public/images/Dials.jpg";
import codeImage from "$/public/images/code-image.jpg";

import { motion } from "framer-motion";

import Image from "next/image";

import imageStyles from "$/styles/imageStyles/ImageTransitions.module.scss";

function Home() {
  const width = useWindowCheck();

  const opacitySequence = {
    base: { opacity: [0, 1, 1, 1, 0, 1] },
    sibling: { opacity: [0, 1, 1, 0, 0] },
  };
  const transition = (delay: number) => {
    return { base: { duration: 5, delay }, sibling: { duration: 5, delay } };
  };

  if (width) {
    return (
      <div className={appStyles.app_container}>
        <div className={layoutStyles.app_component}>
          <section className={layoutStyles.home_container} id="home_container">
            <div className={appStyles.intro_wrapper}>
              {/* <Intro /> */}
              <div className={width < 1150 ? `${layoutStyles.component}` : ""}>
                <section className={layoutStyles.info_wrapper}>
                  <h1>Hi, I'm Nick</h1>
                  <p>Programmer • Sound Enthusiast • Forest Dweller</p>
                </section>
              </div>
            </div>

            <div className={appStyles.color_fade_container}>
              <motion.div
                animate={opacitySequence.base}
                transition={transition(0).base}
                className={appStyles.color_fade_box}
              />
              <motion.div
                animate={opacitySequence.sibling}
                transition={transition(1).sibling}
                className={appStyles.color_fade_box}
              />
              <motion.div
                animate={opacitySequence.sibling}
                transition={transition(2).sibling}
                className={appStyles.color_fade_box}
              />
              {/* <IconNav /> */}
            </div>

            {/* <ImageTransition /> */}
            <div
              className={imageStyles.image_transition_container}
              style={{ position: "relative" }}
            >
              <motion.div
                animate={opacitySequence.base}
                transition={transition(0).base}
                className={imageStyles.image_wrapper}
              >
                <Image
                  className={imageStyles.img}
                  src={codeImage}
                  alt="code"
                  fill={true}
                  style={{
                    objectFit: "cover",
                    transform: "scale(1.4)",
                  }}
                />
              </motion.div>

              <motion.div
                animate={opacitySequence.sibling}
                transition={transition(1).sibling}
                className={imageStyles.image_wrapper}
              >
                <Image
                  className={imageStyles.img}
                  src={dialsImage}
                  alt="sound eq dials"
                  fill={true}
                  style={{
                    objectFit: "contain",
                    transform: "scale(3.7)",
                  }}
                />
              </motion.div>

              <motion.div
                animate={opacitySequence.sibling}
                transition={transition(2).sibling}
                className={imageStyles.image_wrapper}
              >
                <Image
                  className={imageStyles.img}
                  src={treesImage}
                  alt="overhead forest shot"
                  fill={true}
                  style={{
                    objectFit: "cover",
                    transform: "scale(1.4)",
                    objectPosition: "right",
                  }}
                />
              </motion.div>
            </div>
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
