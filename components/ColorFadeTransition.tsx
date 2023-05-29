import React from "react";

import appStyles from "$/styles/components/App.module.scss";
import { TransitionProps } from "$/types";

import { motion } from "framer-motion";

function ColorFadeTransition({
  animationSequecence,
  transition,
}: TransitionProps) {
  return (
    <div className={appStyles.color_fade_container}>
      <motion.div
        animate={animationSequecence.imageBase}
        transition={transition(0).imageBase}
        className={appStyles.color_fade_box}
      />
      <motion.div
        animate={animationSequecence.imageSibling}
        transition={transition(1).imageSibling}
        className={appStyles.color_fade_box}
      />
      <motion.div
        animate={animationSequecence.imageSibling}
        transition={transition(2).imageSibling}
        className={appStyles.color_fade_box}
      />
    </div>
  );
}

export default ColorFadeTransition;
