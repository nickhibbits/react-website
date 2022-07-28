import { Fragment } from "react";

import ProjectCard from "./ProjectCard";
import projects from "../projects";

import "../styles/Work.css";

function ProjectSet({ name }) {
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
          <a
            style={{ textDecoration: "none" }}
            href={projects.bearsDen.link}
            target="_blank"
            rel="noreferrer"
          >
            <ProjectCard
              title={projects.bearsDen.title}
              description={projects.bearsDen.description}
              imgAlt={projects.bearsDen.imgAlt}
              imgSrc={projects.bearsDen.imgSrc}
            />
          </a>
        </Fragment>
      ) : (
        <Fragment>
          <a
            style={{ textDecoration: "none" }}
            href={projects.pollApp.link}
            target="_blank"
            rel="noreferrer"
          >
            <ProjectCard
              title={projects.pollApp.title}
              description={projects.pollApp.description}
              imgAlt={projects.pollApp.imgAlt}
              imgSrc={projects.pollApp.imgSrc}
            />
          </a>
          <a
            style={{ textDecoration: "none" }}
            href={projects.bookApp.link}
            target="_blank"
            rel="noreferrer"
          >
            <ProjectCard
              title={projects.bookApp.title}
              description={projects.bookApp.description}
              imgAlt={projects.bookApp.imgAlt}
              imgSrc={projects.bookApp.imgSrc}
            />
          </a>
        </Fragment>
      )}
    </div>
  );
}

export default ProjectSet;
