import { Fragment } from "react";

import ProjectCard from "./ProjectCard";
import bearsDen from "../images/Crowd-Front.JPG";

import "../styles/Work.css";

function ProjectSet({ name }) {
  const projects = {
    zoomies: {
      title: "Studio Zoomies",
      description:
        "Junior Developer at a startup building a Customer Relation Managment Application for photographers.",
      imgAlt: "Studio Zoomies Logo",
      imgSrc: null,
      link: "https://studiozoomies.com",
    },
    bearsDen: {
      title: "The Bear's Den",
      description:
        "Built e-commerce, studied SEO, performed cross-platform integration with social media for a small business.",
      imgAlt: "The Bear's Den",
      imgSrc: bearsDen,
    },
  };

  return (
    <div className="project-set-component">
      <div className="project-set-title">{name}</div>
      {name === "Professional" ? (
        <Fragment>
          <a
            style={{ textDecoration: "none" }}
            href={projects.zoomies.link}
            target="_blank"
            rel="noreferrer"
          >
            <ProjectCard
              title={projects.zoomies.title}
              description={projects.zoomies.description}
              imgAlt={projects.zoomies.imgAlt}
              imgSrc={null}
            />
          </a>
          <ProjectCard
            title={projects.bearsDen.title}
            description={projects.bearsDen.description}
            imgAlt={projects.bearsDen.imgAlt}
            imgSrc={projects.bearsDen.imgSrc}
          />
        </Fragment>
      ) : (
        <Fragment>
          <ProjectCard />
          <ProjectCard />
        </Fragment>
      )}
    </div>
  );
}

export default ProjectSet;
