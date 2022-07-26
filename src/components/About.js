import Socials from "./Socials";
import Skill from "./Skill";
import React from "react";

import "../styles/About.css";

const About = () => {
  return (
    <main id="about-component">
      <div className="about-wrapper">
        <div className="title-socials-wrapper">
          <div className="profile">Profile</div>
          <Socials />
        </div>
        <div className="profile-wrapper">
          <div className="profile-title">Skills</div>
          <ul className="skills-list">
            <Skill
              title={"Front-End"}
              skills={["React", "Svelte", "HTML", "CSS/Sass"]}
            />
            <Skill title={"Back-End"} skills={["Firebase", "Node"]} />
            <Skill
              title={"Other Tools"}
              skills={["REST APIs", "Git", "TypeScript", "Redux", "Jest"]}
            />
            <Skill title={"Misc"} skills={["E-Commerce", "SEO"]} />
          </ul>
        </div>
        <div className="profile-wrapper">
          <div className="profile-title">About</div>
          <div className="profile-description">
            I'm a front-end focused developer with experience working at a
            startup as well as performing ecommerce managment for a small
            business.
            <br />
            <br /> Check out my work and let's connect.
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
