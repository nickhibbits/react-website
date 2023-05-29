import treesImage from "$/public/images/trees-overhead-min.jpg";
import synthImage from "$/public/images/synthesizer.jpg";
import codeImage from "$/public/images/code-image.jpg";

import { motion } from "framer-motion";

import Image from "next/image";

import imageStyles from "$/styles/imageStyles/ImageTransitions.module.scss";
import { TransitionProps } from "$/types";

function ImageTransition({ animationSequecence, transition }: TransitionProps) {
  return (
    <div
      className={imageStyles.image_transition_container}
      style={{ position: "relative" }}
    >
      <motion.div
        animate={animationSequecence.imageBase}
        transition={transition(0).imageBase}
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
        animate={animationSequecence.imageSibling}
        transition={transition(1).imageSibling}
        className={imageStyles.image_wrapper}
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
        animate={animationSequecence.imageSibling}
        transition={transition(2).imageSibling}
        className={imageStyles.image_wrapper}
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
