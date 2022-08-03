import Socials from "./Socials";
import Skill from "./Skill";
import React from "react";

import "../styles/About.scss";

const About = () => {
  return (
    <main id="about-component">
      <div className="about-wrapper">
        <div className="title-socials-wrapper">
          <div className="profile">Profile</div>
          <Socials addPadding={true} />
        </div>
        <div className="profile-container">
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
              Hi I'm Nick -- a front-end focused developer with experience
              working at a startup as well as performing e-commerce managment
              for a small business.
              <br />
              <br /> Welcome to my website and personal playground. Built using
              React and SCSS, I use this space to try new techniques and refine
              my understanding of various concepts I've learned.
              <br />
              <br /> Check out my work and let's connect!
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
