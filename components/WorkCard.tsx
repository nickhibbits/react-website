import workCardStyles from "$/styles/components/WorkCard.module.scss";
import Image, { StaticImageData } from "next/image";

type WorkCardProps = {
  title: string | null;
  description: string;
  imgSrc: StaticImageData | string;
  siteLink: string;
};

function WorkCard({ title, description, imgSrc, siteLink }: WorkCardProps) {
  const portions = description.split(",");

  return (
    <a href={siteLink} className={workCardStyles.work_card_component}>
      <div className={workCardStyles.svg_container}>
        <Image height={80} width={80} src={imgSrc} alt="" />
      </div>
      <div className={workCardStyles.work_card_info_wrapper}>
        <p>{title}</p>
        <p>
          {portions[0]} <br /> <em>{portions[1]}</em>
        </p>
      </div>
    </a>
  );
}

export default WorkCard;
