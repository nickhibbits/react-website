import "../styles/Work.css";
import ProjectCard from "./ProjectCard";
import ProjectSet from "./ProjectSet";

function Work() {
  return (
    <div className="work-component">
      <div className="work-title">Work</div>
      <div className="projects-wrapper">
        <ProjectSet name={"Professional"} />
        <ProjectSet name={"Personal"} />
      </div>
    </div>
  );
}

export default Work;
