import Link from "next/link";

import workCardStyles from "$/styles/components/WorkCard.module.scss";

type WorkCardProps = {
  title: string;
  description: string;
  imgSrc: string;
};
function WorkCard({ title, description, imgSrc }: WorkCardProps) {
  if (title === "Studio Zoomies") {
    return (
      <div
        className={workCardStyles.work_card_component}
        style={{
          backgroundColor: "black",
        }}
      >
        <div className={workCardStyles.logo_container}>
          <div className={workCardStyles.logo_wrapper}>
            {/* zoomies logo svg  */}
          </div>
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link href={`/projects/${title}`}>
          <button>Read More</button>
        </Link>
      </div>
    );
  } else {
    return (
      <div
        className={workCardStyles.work_card_component}
        style={{
          backgroundColor: "black",
          backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0.5)
        ), url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2>{title}</h2>
        <p>{description}</p>
        <Link href={`/projects/${title}`}>
          <button>Read More</button>
        </Link>
      </div>
    );
  }
}

export default WorkCard;
