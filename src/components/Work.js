import React from "react";
import "../styles/Work.css";
import ProjectSet from "./ProjectSet";

const Work = () => {
  return (
    <div id="work-component">
      <div className="work-title">Work</div>
      <div className="projects-wrapper">
        <ProjectSet name={"Professional"} />
        <ProjectSet name={"Personal"} />
      </div>
    </div>
  );
};

export default Work;
