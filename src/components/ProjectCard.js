import { Fragment } from "react";
import { ReactComponent as ZoomiesLogo } from "../ZoomiesLogo.svg";

import "../styles/Work.css";

function ProjectCard({ title, description, imgSrc, imgAlt }) {
  console.log(imgSrc);
  return (
    <div
      className="project-card-component"
      style={{
        background: title == "Studio Zoomies" ? `black` : ` url(${imgSrc})`,
        backgroundSize: "contain",
      }}
    >
      <div className="project-image-wrapper">
        {title === "Studio Zoomies" ? (
          <div className="zoomies-logo-wrapper">
            <div className="logo-wrapper">
              <ZoomiesLogo />
            </div>
            <div className="zoomies-project-title-wrapper">
              <div className="zoomies-project-title">{title} </div>
            </div>
          </div>
        ) : (
          <div className="project-title">{title} </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
