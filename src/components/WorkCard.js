import React from "react";

function WorkCard({ title, description, imgSrc }) {
  return (
    <div
      className="work-card-component"
      style={{
        backgroundColor: "black",
        opacity: "0.7",
        backgroundImage: `url(${imgSrc})`,
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
