import trees from "$/public/images/trees-overhead-min.jpg";

import Image from "next/image";

import appStyles from "$/styles/components/App.module.scss";

function ImageTransition() {
  return (
    <div className={appStyles.box_trees} style={{ position: "relative" }}>
      <Image
        className="img"
        src={trees}
        alt="overhead shot of forest"
        fill={true}
        style={{
          objectFit: "cover",
          transform: "scale(1.4)",
          objectPosition: "right",
        }}
      />
    </div>
  );
}

export default ImageTransition;
