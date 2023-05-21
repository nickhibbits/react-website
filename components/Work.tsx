import { useRef, useState } from "react";
import { useWindowCheck } from "$/utils/customHooks";

import projects from "$/constants/projects";

import workCardStyles from "$/styles/components/WorkCard.module.scss";
import layoutStyles from "$/styles/layout/layout.module.scss";
import svgStyles from "$/styles/imageStyles/svg.module.scss";
import WorkCard from "$/components/WorkCard";

function Work() {
  const filteredProjects = Object.values(projects).filter(
    (project) => project.type === "professional"
  );

  const width = useWindowCheck();

  if (width) {
    return (
      <div className={layoutStyles.container} id={layoutStyles.work_container}>
        <div className={`${svgStyles.svg_wrapper} ${svgStyles.circles_svg}`}>
          <img src="/svgs/abstract-dots.svg" />
          {/* svg component */}
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
              Collection of professional contributions and personal projects.
              Scroll through the cards, and click each to learn more.
            </p>
          </section>
          <div>
            <div className={workCardStyles.card_scroll_container}>
              {filteredProjects.map((project) => {
                return (
                  <WorkCard
                    title={project.title}
                    description={project.basicDescription}
                    imgSrc={project.imgSrc}
                    key={project.id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default Work;
