import { Fragment } from "react";
import { ReactComponent as ZoomiesLogo } from "../ZoomiesLogo.svg";

import "../styles/Work.css";

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
            <div className="image-wrapper">
              <img className="project-image" src={imgSrc} alt={imgAlt} />
            </div>
            <div className="project-title">{title} </div>
          </Fragment>
        )}
      </div>
      <div className="project-description">{description}</div>
    </div>
  );
}

export default ProjectCard;
