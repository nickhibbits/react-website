import Link from "next/link";

import workCardStyles from "$/styles/components/WorkCard.module.scss";
import Image, { StaticImageData } from "next/image";

type WorkCardProps = {
  title: string;
  description: string;
  imgSrc: StaticImageData | string;
};

function WorkCard({ title, description, imgSrc }: WorkCardProps) {
  return (
    <div className={workCardStyles.work_card_component}>
      <div className={workCardStyles.svg_container}>
        {/* <div className={workCardStyles.svg_wrapper}> */}
        <Image height={80} width={80} src={imgSrc} alt="" />
        {/* </div> */}
      </div>
      <div className={workCardStyles.work_card_info_wrapper}>
        <p>{title}</p>
        <p>{description}</p>
        {/* <Link href={`/projects/${title}`}>
            <button>Read More</button>
          </Link> */}
      </div>
    </div>
  );
}

export default WorkCard;
