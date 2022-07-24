import "../styles/Work.css";
import ProjectCard from "./ProjectCard";

function ProjectSet({ name }) {
  // const

  return (
    <div className="project-set-component">
      <div className="project-set-title">{name}</div>
      <ProjectCard />
      <ProjectCard />
    </div>
  );
}

export default ProjectSet;
