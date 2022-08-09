import { ReactComponent as ZoomiesLogo } from "../ZoomiesLogo.svg";

import "../styles/Work.scss";
import { Link } from "react-router-dom";

function ProjectCard({ title, imgSrc, basicDescription }) {
  return (
    <div className="project-card-image-description-wrapper">
      <Link to={`/projects/${title}`} style={{ textDecoration: "none" }}>
        <div
          className="project-card-component"
          style={{
            background:
              title === "Studio Zoomies" ? `black` : ` url(${imgSrc})`,
            backgroundSize:
              title === "Employee Poll App" || title === "My Reads App"
                ? "325px 190px"
                : "contain",
            backgroundRepeat: "no-repeat",
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
      </Link>
      <div className="basic-description-wrapper">
        <div className="project-card-basic-description">{basicDescription}</div>
      </div>
    </div>
  );
}

export default ProjectCard;
