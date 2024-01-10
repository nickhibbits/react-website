import { Righteous } from "next/font/google";

import projects from "$/constants/projects";

import workCardStyles from "$/styles/components/WorkCard.module.scss";
import layoutStyles from "$/styles/layout/layout.module.scss";

import WorkCard from "$/components/WorkCard";

export const righteous = Righteous({ weight: "400", subsets: ["latin"] });

function Work() {
  return (
    <div className={`${layoutStyles.container} ${layoutStyles.work_container}`}>
      <div
        className={`${layoutStyles.component} ${layoutStyles.work_component} ${layoutStyles.split}`}
      >
        <section className={layoutStyles.info_wrapper}>
          <h1 className={righteous.className}>Work</h1>
          <p>
            Professional contributions and projects of which I&apos;ve been a
            part. Websites are linked to the tiles.
            <br /> <br /> For more cool stuff, follow the link to my Github in
            Connect.
          </p>
        </section>
        <div className={workCardStyles.container_wrapper}>
          <div className={workCardStyles.card_scroll_container}>
            <WorkCard
              title={"nickhibbits.com"}
              description={"Portfolio site, - Built in Next.js"}
              imgSrc={"/svgs/website-click-svgrepo-com.svg"}
              siteLink={"https://github.com/nickhibbits/react-website"}
              key={4}
            />
            <WorkCard
              title={"Studio Zoomies"}
              description={"Photography CRM startup, - Software Developer"}
              imgSrc={"/svgs/ZoomiesLogo.svg"}
              siteLink={"https://www.studiozoomies.com/home"}
              key={3}
            />
            <WorkCard
              title={"Meditation App"}
              description={
                "Full stack web application, - Built in Next.js with MongoDB"
              }
              imgSrc={"/svgs/meditation-round-svgrepo-com.svg"}
              siteLink={"https://github.com/nickhibbits/meditation_app"}
              key={2}
            />
            <WorkCard
              title={"The Bear's Den"}
              description={"Chainsaw carving shop, - E-Comm / Web Developer"}
              imgSrc={"/svgs/chainsaw-svgrepo-com.svg"}
              siteLink={"http://www.etsy.com/shop/TheBearsDenTahoe"}
              key={1}
            />
          </div>
        </div>
      </div>
    </div>
  );

  return null;
}

export default Work;
