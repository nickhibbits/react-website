import { useWindowCheck } from "$/utils/customHooks";
import { motion, useAnimate } from "framer-motion";
import React from "react";

import layoutStyles from "$/styles/layout/layout.module.scss";
import appStyles from "$/styles/components/App.module.scss";
import { TransitionProps } from "$/types";
import { opacitySequenceVariants } from "$/constants/animations";

//TODO add hover effect with synced title and image
function Intro({
  // animationSequecence,
  title1Controls,
  title2Controls,
  title3Controls,
  greetingComplete,
  updateGreeting,
  handleHover,
  previousHover,
}: {
  title1Controls: any;
  title2Controls: any;
  title3Controls: any;
  greetingComplete: any;
  updateGreeting: any;
  handleHover: any;
  previousHover: string;
}) {
  const width = useWindowCheck();
  if (width) {
    return (
      <div className={width < 1150 ? `${layoutStyles.component}` : ""}>
        <section className={layoutStyles.info_wrapper}>
          {greetingComplete ? (
            <>
              <h1>Hi, I'm Nick</h1>
              <ul className={layoutStyles.title_list}>
                <motion.li
                  animate={title1Controls}
                  className={appStyles.color_fade_box}
                  style={{ opacity: 0 }}
                  // variants={opacitySequenceVariants}
                  onHoverStart={() => handleHover("programmer", previousHover)}
                >
                  Programmer
                </motion.li>
                <motion.li
                  animate={title2Controls}
                  className={appStyles.color_fade_box}
                  style={{ opacity: 0 }}
                  // variants={opacitySequenceVariants}
                  onHoverStart={() => handleHover("sound", previousHover)}
                >
                  • Sound Enthusiast
                </motion.li>
                <motion.li
                  animate={title3Controls}
                  className={appStyles.color_fade_box}
                  style={{ opacity: 0 }}
                  // variants={opacitySequenceVariants}
                  onHoverStart={() => handleHover("forest", previousHover)}
                >
                  • Forest Dweller
                </motion.li>
              </ul>
            </>
          ) : (
            <motion.h1
              animate={{ opacity: [0, 1] }}
              transition={{ ease: "easeOut", duration: 1 }}
              onAnimationComplete={() => updateGreeting()}
              style={{ paddingBottom: "25px" }}
            >
              Hi, I'm Nick
            </motion.h1>
          )}
        </section>
      </div>
    );
  }

  return null;
}

export default Intro;
