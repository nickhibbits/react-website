import React from "react";
import projects from "../projects";
import WorkCard from "./WorkCard";

import "../styles/WorkCard.scss";
import { useWindowCheck } from "../customHooks";

function Work() {
  const width = useWindowCheck();

  return (
    <div className="container work-container">
      <div
        className={
          width > 1100
            ? `component work-component split`
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
        <div className="work-cards-container">
          <div className="buttons-wrapper">
            <button className="filter-button">Professional</button>
            <button className="filter-button">Personal</button>
          </div>
          <div className="card-scroll-container">
            {Object.values(projects).map((project) => {
              console.log("imgSrc", project.imgSrc);
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
