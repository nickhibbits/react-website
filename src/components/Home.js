import nick from "../images/nick-professional.jpg";
import React from "react";

import "../styles/Home.css";

export const Home = () => {
  return (
    <main id="home-component">
      <div className="headline-wrapper">
        <div className="headline">Hi I'm Nick</div>
        <div className="subline">Web Developer</div>
      </div>
      <div className="image-wrapper">
        <img src={nick} alt="nick-hibbits"></img>
      </div>
    </main>
  );
};

export default Home;
