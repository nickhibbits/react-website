import ProjectCard from "./ProjectCard";
import projects from "../projects";

import "../styles/Projects.scss";

function ProjectSet({ name }) {
  return (
    <div className="project-set-component">
      <div className="project-set-wrapper">
        <div className="project-set-title">{name}</div>
        {name === "Professional" ? (
          <div className="project-card-container">
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
                  imgSrc={projects.bearsDen.imgSrc}
                />
              </a>
            </div>
          </div>
        ) : (
          <div className="project-card-container">
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
                  imgSrc={projects.bookApp.imgSrc}
                />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectSet;
