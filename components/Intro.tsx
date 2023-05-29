import { useWindowCheck } from "$/utils/customHooks";
import { motion, useAnimate } from "framer-motion";
import React from "react";

import layoutStyles from "$/styles/layout/layout.module.scss";
import appStyles from "$/styles/components/App.module.scss";
import { TransitionProps } from "$/types";

//TODO add hover effect with synced title and image
function Intro({
  animationSequecence,
  transition,
  greetingComplete,
  updateGreeting,
}: { greetingComplete: boolean; updateGreeting: any } & TransitionProps) {
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
                  animate={animationSequecence}
                  transition={transition(0).title}
                  className={appStyles.color_fade_box}
                  style={{ opacity: 0 }}
                >
                  Programmer
                </motion.li>
                <motion.li
                  animate={animationSequecence}
                  transition={transition(1).title}
                  className={appStyles.color_fade_box}
                  style={{ opacity: 0 }}
                >
                  • Sound Enthusiast
                </motion.li>
                <motion.li
                  animate={animationSequecence}
                  transition={transition(2).title}
                  className={appStyles.color_fade_box}
                  style={{ opacity: 0 }}
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
