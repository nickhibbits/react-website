import { useWindowCheck } from "../customHooks";
import { ReactComponent as CirclesSvg } from "../assets/svgs/abstract-dots.svg";

import React, { useState } from "react";
import projects from "../projects";
import WorkCard from "./WorkCard";

import "../styles/components/WorkCard.scss";

function Work() {
  const [filteredProjects, setFilteredProjects] = useState(
    Object.values(projects).filter((project) => project.type === "professional")
  );
  const width = useWindowCheck();
  const filterProjects = (type) => {
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
          width > 1150
            ? `component work-component work-split`
            : `component work-component`
        }
      >
        <section className="info-wrapper">
          <h1>Work</h1>
          <p>
            Collection of professional and personal projects. Scroll through the
            cards, and click each to learn more.
          </p>
        </section>
        <div className="buttons-wrapper">
          <button
            className="filter-button"
            onClick={() => filterProjects("professional")}
          >
            Professional
          </button>
          <button
            className="filter-button"
            onClick={() => filterProjects("personal")}
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
