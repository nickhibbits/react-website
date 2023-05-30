import treesImage from "$/public/images/trees-overhead-min.jpg";
import synthImage from "$/public/images/synthesizer.jpg";
import codeImage from "$/public/images/code-image.jpg";

import { motion } from "framer-motion";

import Image from "next/image";

import imageStyles from "$/styles/imageStyles/ImageTransitions.module.scss";
import { TransitionProps } from "$/types";
import { opacitySequenceVariants } from "$/constants/animations";

function ImageTransition({
  image1stSiblingControls,
  image2ndSiblingControls,
  image3rdSiblingControls,
  // variants,
  updateIntroComplete,
}: {
  image1stSiblingControls: any;
  image2ndSiblingControls: any;
  image3rdSiblingControls: any;
  // variants: any;
  updateIntroComplete: any;
}) {
  return (
    <div
      className={imageStyles.image_transition_container}
      style={{ position: "relative" }}
    >
      <motion.div
        animate={image1stSiblingControls}
        className={imageStyles.image_wrapper}
        style={{ opacity: 0 }}
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
        animate={image2ndSiblingControls}
        className={imageStyles.image_wrapper}
        style={{ opacity: 0 }}
        onAnimationComplete={() => updateIntroComplete(true)}
      >
        <Image
          className={imageStyles.img}
          src={synthImage}
          alt="sound eq dials"
          fill={true}
          style={{
            objectFit: "contain",
            transform: "scale(1.5)",
          }}
        />
      </motion.div>

      <motion.div
        animate={image3rdSiblingControls}
        className={imageStyles.image_wrapper}
        style={{ opacity: 0 }}
      >
        <Image
          className={imageStyles.img}
          src={treesImage}
          alt="overhead forest shot"
          fill={true}
          style={{
            objectFit: "cover",
            transform: "scale(1)",
            objectPosition: "right",
          }}
        />
      </motion.div>
    </div>
  );
}

export default ImageTransition;
