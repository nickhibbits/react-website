import treesImage from "$/public/images/trees-overhead-min.jpg";
import dialsImage from "$/public/images/Dials.jpg";
import codeImage from "$/public/images/code-image.jpg";

import Image from "next/image";

import imageStyles from "$/styles/imageStyles/ImageTransitions.module.scss";

function ImageTransition() {
  return (
    <div
      className={imageStyles.image_transition_container}
      style={{ position: "relative" }}
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
    </div>
  );
}

export default ImageTransition;
