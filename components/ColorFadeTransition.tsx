import appStyles from "$/styles/components/App.module.scss";
import { TransitionProps } from "$/types";

import { motion } from "framer-motion";
import { opacitySequenceVariants } from "$/constants/animations";

function ColorFadeTransition({
  image1stSiblingControls,
  image2ndSiblingControls,
  image3rdSiblingControls,
}: {
  image1stSiblingControls: any;
  image2ndSiblingControls: any;
  image3rdSiblingControls: any;
}) {
  return (
    <div className={appStyles.color_fade_container}>
      <motion.div
        animate={image1stSiblingControls}
        className={appStyles.color_fade_box}
        style={{ opacity: 0 }}
      />
      <motion.div
        animate={image2ndSiblingControls}
        className={appStyles.color_fade_box}
        style={{ opacity: 0 }}
      />
      <motion.div
        animate={image3rdSiblingControls}
        className={appStyles.color_fade_box}
        style={{ opacity: 0 }}
      />
    </div>
  );
}

export default ColorFadeTransition;
