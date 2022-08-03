import React from "react";
import "../styles/Home.scss";

const nick = require("../assets/images/nick-professional.jpg");

export const Home = () => {
  return (
    <main id="home-component">
      <div className="headline-wrapper">
        <img id="nick-image" src={nick} alt="nick-hibbits"></img>
        <div className="headline">Nick Hibbits</div>
        <div className="subline">Web Developer</div>
      </div>
    </main>
  );
};

export default Home;
