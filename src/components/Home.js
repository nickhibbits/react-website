import { useWindowCheck } from "../customHooks";

import React from "react";

function Home() {
  const width = useWindowCheck();
  return (
    <div className={width < 1150 ? "component" : ""} id="home-component">
      <section className="info-wrapper">
        <h1>Hi, I'm Nick</h1>
        <p>
          Welcome to my website and personal playground. <br />
          <br />
          Built using React and SCSS, I use this space to showcase my work, try
          new techniques, and refine my understanding of various concepts I come
          across in my time spent as a web developer.
        </p>
      </section>
    </div>
  );
}

export default Home;
