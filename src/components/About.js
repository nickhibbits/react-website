// import React, { useEffect, useState } from "react";
import "../styles/index.scss";
import "../styles/SkillsCard.scss";
import SkillsCard from "./SkillsCard";
import { useWindowCheck } from "../customHooks";

function About() {
  const width = useWindowCheck();

  return (
    <div
      // className="container about-container"
      className="container about-container"
    >
      <div
        className={
          width > 1100
            ? `component about-component split`
            : `component about-component`
        }
      >
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
        <section
          id="skill-card-wrapper"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <SkillsCard />
        </section>
      </div>
    </div>
  );
}

export default About;
