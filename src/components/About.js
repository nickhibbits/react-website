import React from "react";
import SkillsCard from "./SkillsCard";

function About() {
  return (
    <section className="container about-container">
      <div className="component about-component">
        <section className="info-wrapper">
          <h1>About</h1>
          <p>
            My name’s Nick Hibbits. I’m a front-end focused web developer with
            experience working at a startup as well as performing e-commerce
            managment for a small business.
            <br />
            <br />
            I love building sleek digital experiences that make a statement and
            are a pleasure to use.
            <br />
            <br />
            Check out my work and let’s connect.
          </p>
        </section>
        <SkillsCard />
      </div>
    </section>
  );
}

export default About;
