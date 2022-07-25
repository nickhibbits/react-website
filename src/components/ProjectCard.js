import "../styles/Work.css";
import { ReactComponent as ZoomiesLogo } from "../ZoomiesLogo.svg";

function ProjectCard() {
  return (
    <div className="project-card-component">
      <div className="project-image-wrapper">
        <ZoomiesLogo />
      </div>
      <div className="project-description">description</div>
    </div>
  );
}

export default ProjectCard;
