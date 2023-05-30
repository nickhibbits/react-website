import React from "react";

import appStyles from "$/styles/components/App.module.scss";
import { TransitionProps } from "$/types";

import { motion } from "framer-motion";
import { opacitySequenceVariants } from "$/constants/animations";

function ColorFadeTransition({ animationSequecence }: TransitionProps) {
  return (
    <div className={appStyles.color_fade_container}>
      <motion.div
        animate={animationSequecence.imageBaseInitial}
        className={appStyles.color_fade_box}
        style={{ opacity: 0 }}
        variants={opacitySequenceVariants}
      />
      <motion.div
        animate={animationSequecence.image1stSiblingInitial}
        className={appStyles.color_fade_box}
        style={{ opacity: 0 }}
        variants={opacitySequenceVariants}
      />
      <motion.div
        animate={animationSequecence.image2ndSiblingInitial}
        className={appStyles.color_fade_box}
        style={{ opacity: 0 }}
        variants={opacitySequenceVariants}
      />
    </div>
  );
}

export default ColorFadeTransition;
