import treesImage from "$/public/images/_trees-overhead-min-3.jpg";
import synthImage from "$/public/images/_synthesizer-2.jpg";
import codeImage from "$/public/images/_code-image-3.jpg";

import { motion } from "framer-motion";

import Image from "next/image";

import imageStyles from "$/styles/imageStyles/ImageTransitions.module.scss";
import { useWindowCheck } from "$/utils/customHooks/useWindowCheck";

function ImageTransition({
  image1stSiblingControls,
  image2ndSiblingControls,
  image3rdSiblingControls,
  updateIntroComplete,
}: {
  image1stSiblingControls: any;
  image2ndSiblingControls: any;
  image3rdSiblingControls: any;
  updateIntroComplete: any;
}) {
  const width = useWindowCheck();

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
            objectPosition: "20% 50%",
            transform: "scale(1.4)",
          }}
          unoptimized={true}
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
          style={
            width > 715
              ? {
                  objectFit: "contain",
                  transform: "scale(2.1)",
                }
              : {
                  objectFit: "contain",
                  transform: "scale(4)",
                }
          }
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
            objectPosition: "right",
          }}
        />
      </motion.div>
    </div>
  );
}

export default ImageTransition;
