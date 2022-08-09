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
              <ProjectCard
                title={projects.zoomies.title}
                description={projects.zoomies.description}
                imgSrc={null}
                basicDescription={projects.zoomies.basicDescription}
              />
            </div>
            <div className="anchor-wrapper">
              <ProjectCard
                title={projects.bearsDen.title}
                description={projects.bearsDen.description}
                imgSrc={projects.bearsDen.imgSrc}
                basicDescription={projects.bearsDen.basicDescription}
              />
            </div>
          </div>
        ) : (
          <div className="project-card-container">
            <div className="anchor-wrapper">
              <ProjectCard
                title={projects.pollApp.title}
                description={projects.pollApp.description}
                imgSrc={projects.pollApp.imgSrc}
                basicDescription={projects.pollApp.basicDescription}
              />
            </div>
            <div className="anchor-wrapper">
              <ProjectCard
                title={projects.bookApp.title}
                description={projects.bookApp.description}
                imgSrc={projects.bookApp.imgSrc}
                basicDescription={projects.bookApp.basicDescription}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectSet;
