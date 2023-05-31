import { useRef, useState } from "react";
import { useWindowCheck } from "$/utils/customHooks";

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
          <Parallax speed={-5}>
            <img src="/svgs/abstract-dots.svg" />
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
              Professional contributions listed here. Hover the logos to learn
              more. To view personal projects, follow the link to my github
              below.
            </p>
          </section>
          <div>
            <div className={workCardStyles.card_scroll_container}>
              <Image
                height={100}
                width={100}
                src="/svgs/ZoomiesLogo.svg"
                alt=""
              />
              <Image
                height={100}
                width={100}
                src="/svgs/chainsaw-svgrepo-com.svg"
                alt=""
              />
              {/* {filteredProjects.map((project) => {
                return (
                  <WorkCard
                    title={project.title}
                    description={project.basicDescription}
                    imgSrc={project.imgSrc}
                    key={project.id}
                  />
                );
              })} */}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default Work;
