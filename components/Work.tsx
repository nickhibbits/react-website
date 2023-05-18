import { useRef, useState } from "react";
import { useWindowCheck } from "$/utils/customHooks";

import projects from "$/constants/projects";

import workCardStyles from "$/styles/components/WorkCard.module.scss";
import layoutStyles from "$/styles/layout/layout.module.scss";
import svgStyles from "$/styles/imageStyles/svg.module.scss";
import WorkCard from "$/components/WorkCard";

function Work() {
  const [filteredProjects, setFilteredProjects] = useState(
    Object.values(projects).filter((project) => project.type === "professional")
  );

  const professionalButton = useRef<HTMLButtonElement>(null);
  const personalButton = useRef<HTMLButtonElement>(null);

  const width = useWindowCheck();

  const handleClick = (type: string) => {
    if (professionalButton.current && personalButton.current) {
      if (type === "professional") {
        professionalButton.current.classList.add("active");
        personalButton.current.classList.remove("active");
      }

      if (type === "personal") {
        professionalButton.current.classList.remove("active");
        personalButton.current.classList.add("active");
      }
    }

    setFilteredProjects(
      Object.values(projects).filter((project) => project.type === type)
    );
  };

  return (
    <div className={layoutStyles.container} id={workCardStyles.work_container}>
      <div className={`${svgStyles.svg_wrapper} ${svgStyles.circles_svg}`}>
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
        <div className={workCardStyles.buttons_wrapper}>
          <button
            ref={professionalButton}
            className={workCardStyles.active}
            onClick={() => handleClick("professional")}
          >
            Professional
          </button>
          <button ref={personalButton} onClick={() => handleClick("personal")}>
            Personal
          </button>
        </div>
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

export default Work;
