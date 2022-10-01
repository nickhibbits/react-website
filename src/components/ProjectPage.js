import React from "react";

function ProjectPage({ name, description, imgSrc }) {
  return (
    <div className="project-page-container split">
      <img src={imgSrc} alt={`${name} image`} />
      <div className="project-info-wrapper">
        <h1 className="project-info-title">{name}</h1>
        <p className="project-info-description">{description}</p>
      </div>
    </div>
  );
}

export default ProjectPage;
