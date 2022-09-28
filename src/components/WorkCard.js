import React from "react";

function WorkCard({ title, description, imgSrc }) {
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
      <button className="button">Read More</button>
    </div>
  );
}

export default WorkCard;
