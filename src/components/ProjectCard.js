import { Fragment } from "react";
import "../styles/Work.css";
import { ReactComponent as ZoomiesLogo } from "../ZoomiesLogo.svg";

function ProjectCard({ title, description, imgSrc, imgAlt }) {
  return (
    <div className="project-card-component">
      <div className="project-image-wrapper">
        {title === "Studio Zoomies" ? (
          <Fragment>
            <div className="zoomies-logo-wrapper">
              <ZoomiesLogo />
            </div>
            <div className="project-title">{title} </div>
          </Fragment>
        ) : (
          <Fragment>
            <img src={imgSrc} alt={imgAlt} />
            <div className="project-title">{title} </div>
          </Fragment>
        )}
      </div>
      <div className="project-description">{description}</div>
    </div>
  );
}

export default ProjectCard;
