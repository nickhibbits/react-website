import { useWindowCheck } from "$/utils/customHooks";
import { motion, useAnimate } from "framer-motion";
import React from "react";

import layoutStyles from "$/styles/layout/layout.module.scss";
import appStyles from "$/styles/components/App.module.scss";
import { TransitionProps } from "$/types";

//TODO add hover effect with synced title and image
function Intro({ animationSequecence, transition }: TransitionProps) {
  const width = useWindowCheck();
  if (width) {
    return (
      <div className={width < 1150 ? `${layoutStyles.component}` : ""}>
        <section className={layoutStyles.info_wrapper}>
          <h1>Hi, I'm Nick</h1>
          <ul className={layoutStyles.title_list}>
            <motion.li
              animate={animationSequecence}
              transition={transition(0).titleSibling}
              className={appStyles.color_fade_box}
            >
              Programmer
            </motion.li>
            <motion.li
              animate={animationSequecence}
              transition={transition(1).titleSibling}
              className={appStyles.color_fade_box}
            >
              • Sound Enthusiast
            </motion.li>
            <motion.li
              animate={animationSequecence}
              transition={transition(2).titleSibling}
              className={appStyles.color_fade_box}
            >
              • Forest Dweller
            </motion.li>
          </ul>
        </section>
      </div>
    );
  }

  return null;
}

export default Intro;
