import React from "react";
import ProjectSet from "./ProjectSet";

import "../styles/Work.scss";

const Work = () => {
  return (
    <div id="work-component">
      <div className="work-wrapper">
        <div className="work-title">Work</div>
        <div className="projects-wrapper">
          <ProjectSet name={"Professional"} />
          <ProjectSet name={"Personal"} />
        </div>
      </div>
    </div>
  );
};

export default Work;
