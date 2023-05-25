import trees from "$/public/images/trees-overhead-min.jpg";
import dials from "$/public/images/Dials.jpg";

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
        src={trees}
        alt="overhead shot of forest"
        fill={true}
        style={{
          objectFit: "cover",
          transform: "scale(1.4)",
          objectPosition: "right",
        }}
      />
      <Image
        className={imageStyles.img}
        src={dials}
        alt="sound eq dials"
        fill={true}
        style={{
          objectFit: "contain",
          transform: "scale(3.8)",
        }}
      />
    </div>
  );
}

export default ImageTransition;
