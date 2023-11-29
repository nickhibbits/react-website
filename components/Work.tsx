import { useWindowCheck } from "$/utils/customHooks/useWindowCheck";

import projects from "$/constants/projects";

import workCardStyles from "$/styles/components/WorkCard.module.scss";
import layoutStyles from "$/styles/layout/layout.module.scss";
import svgStyles from "$/styles/imageStyles/svg.module.scss";
import WorkCard from "$/components/WorkCard";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";

function Work() {
  const filteredProjects = Object.values(projects).filter(
    (project) => project.type === "professional"
  );

  const width = useWindowCheck();

  if (width) {
    return (
      <div
        className={`${layoutStyles.container} ${layoutStyles.work_container}`}
        id="work_container"
      >
        <div className={`${svgStyles.svg_wrapper} ${svgStyles.circles_svg}`}>
          <Parallax speed={-8}>
            <Image
              src="/svgs/abstract-dots.svg"
              alt=""
              width={840}
              height={864}
            />
          </Parallax>
        </div>
        <div
          className={
            width > 850
              ? `${layoutStyles.component} ${layoutStyles.work_component} ${workCardStyles.work_split}`
              : `${layoutStyles.component} ${layoutStyles.work_component}`
          }
        >
          <section className={layoutStyles.info_wrapper}>
            <h1>Work</h1>
            <p>
              Professional contributions and projects of which I&apos;ve been a
              part. Websites are linked to the tiles.
              <br /> <br /> For more cool stuff, follow the link to my Github in
              Connect.
            </p>
          </section>
          <div
            className={workCardStyles.container_wrapper}
            style={{ display: "grid" }}
          >
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
  }

  return null;
}

export default Work;
