import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ZoomiesLogo } from "../assets/svgs/ZoomiesLogo.svg";

function WorkCard({ title, description, imgSrc }) {
  if (title === "Studio Zoomies") {
    return (
      <div
        className="work-card-component"
        style={{
          backgroundColor: "black",
        }}
      >
        <div className="logo-container">
          <div className="logo-wrapper">
            <ZoomiesLogo />
          </div>
        </div>
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <Link to={`/projects/${title}`}>
          <button className="button">Read More</button>
        </Link>
      </div>
    );
  } else {
    return (
      <div
        className="work-card-component"
        style={{
          backgroundColor: "black",
          backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0.5)
        ), url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <Link to={`/projects/${title}`}>
          <button className="button">Read More</button>
        </Link>
      </div>
    );
  }
}

export default WorkCard;
