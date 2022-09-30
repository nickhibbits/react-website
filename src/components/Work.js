import { useWindowCheck } from "../customHooks";
import { ReactComponent as CirclesSvg } from "../assets/svgs/abstract-dots.svg";
import { useRef, useState } from "react";

import projects from "../projects";
import WorkCard from "./WorkCard";

import "../styles/components/WorkCard.scss";

function Work() {
  const [filteredProjects, setFilteredProjects] = useState(
    Object.values(projects).filter((project) => project.type === "professional")
  );

  const professionalButton = useRef();
  const personalButton = useRef();

  const width = useWindowCheck();

  const handleClick = (type) => {
    if (type === "professional") {
      professionalButton.current.classList.add("active");
      personalButton.current.classList.remove("active");
    }

    if (type === "personal") {
      professionalButton.current.classList.remove("active");
      personalButton.current.classList.add("active");
    }

    setFilteredProjects(
      Object.values(projects).filter((project) => project.type === type)
    );
  };

  return (
    <div className="container work-container">
      <div className="svg-wrapper circles-svg">
        <CirclesSvg />
      </div>
      <div
        className={
          width > 850
            ? `component work-component work-split`
            : `component work-component`
        }
      >
        <section className="info-wrapper">
          <h1>Work</h1>
          <p>
            Collection of professional contributions and personal projects.
            Scroll through the cards, and click each to learn more.
          </p>
        </section>
        <div className="buttons-wrapper">
          <button
            ref={professionalButton}
            className="filter-button active"
            onClick={() => handleClick("professional")}
          >
            Professional
          </button>
          <button
            ref={personalButton}
            className="filter-button"
            onClick={() => handleClick("personal")}
          >
            Personal
          </button>
        </div>
        <div className="work-cards-container">
          <div className="card-scroll-container">
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
