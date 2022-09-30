import { useWindowCheck } from "../customHooks";
import { ReactComponent as BigCircleSvg } from "../assets/svgs/abstract-circle.svg";

import "../styles/index.scss";
import "../styles/components/SkillsCard.scss";
import "../styles/imageStyles/svg.scss";

import SkillsCard from "./SkillsCard";

function About() {
  const width = useWindowCheck();

  return (
    <div
      // className="container about-container"
      className="container"
      id="about-container"
    >
      <div className="svg-wrapper big-circle-svg">
        <BigCircleSvg />
      </div>
      <div
        className={
          width > 850
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
