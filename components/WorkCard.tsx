import Link from "next/link";

import workCardStyles from "$/styles/components/WorkCard.module.scss";
import Image, { StaticImageData } from "next/image";

type WorkCardProps = {
  title: string | null;
  description: string;
  imgSrc: StaticImageData | string;
  siteLink: string;
};

function WorkCard({ title, description, imgSrc, siteLink }: WorkCardProps) {
  return (
    <a href={siteLink} className={workCardStyles.work_card_component}>
      <div className={workCardStyles.svg_container}>
        <Image height={80} width={80} src={imgSrc} alt="" />
      </div>
      <div className={workCardStyles.work_card_info_wrapper}>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </a>
  );
}

export default WorkCard;
