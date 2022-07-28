import { Fragment } from "react";

import ProjectCard from "./ProjectCard";
import projects from "../projects";

import "../styles/Projects.scss";

function ProjectSet({ name }) {
  return (
    <div className="project-set-component">
      <div className="project-set-wrapper">
        <div className="project-set-title">{name}</div>
        {name === "Professional" ? (
          <Fragment>
            <div className="anchor-wrapper">
              <a
                style={{
                  textDecoration: "none",
                }}
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
            </div>
            <div className="anchor-wrapper">
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
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className="anchor-wrapper">
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
            </div>
            <div className="anchor-wrapper">
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
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
}

export default ProjectSet;
