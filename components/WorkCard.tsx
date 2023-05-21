import Link from "next/link";

import workCardStyles from "$/styles/components/WorkCard.module.scss";
import Image, { StaticImageData } from "next/image";

type WorkCardProps = {
  title: string;
  description: string;
  imgSrc: StaticImageData | null;
};

function WorkCard({ title, description, imgSrc }: WorkCardProps) {
  console.log("imgSrc", imgSrc);
  if (title === "Studio Zoomies") {
    return (
      <div
        className={workCardStyles.work_card_component}
        style={{
          backgroundColor: "black",
        }}
      >
        <div className={workCardStyles.svg_container}>
          <div className={workCardStyles.svg_wrapper}>
            <img src="/svgs/ZoomiesLogo.svg" />
            {/* zoomies logo svg  */}
          </div>
        </div>
        <div className={workCardStyles.work_card_info_wrapper}>
          <h2>{title}</h2>
          <p>{description}</p>
          <Link href={`/projects/${title}`}>
            <button>Read More</button>
          </Link>
        </div>
      </div>
    );
  }

  if (imgSrc) {
    console.log("🔴", imgSrc);
    return (
      <div className={workCardStyles.work_card_component}>
        <div className={workCardStyles.work_card_info_wrapper}>
          <h2>{title}</h2>
          <p>{description}</p>
          <Link href={`/projects/${title}`}>
            <button>Read More</button>
          </Link>
        </div>
        <Image
          className={workCardStyles.image}
          src={imgSrc}
          alt="image description"
          fill={true}
          style={{
            objectFit: "cover",
            borderRadius: "15px",
          }}
        />
        <div className={workCardStyles.overlay}></div>
      </div>
    );
  }

  return null;
}

export default WorkCard;
