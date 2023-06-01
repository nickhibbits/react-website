import SkillsCard from "./SkillsCard";
import { useWindowCheck } from "$/utils/customHooks";

import layoutStyles from "$/styles/layout/layout.module.scss";
import svgStyles from "$/styles/imageStyles/svg.module.scss";
import cardStyle from "$/styles/components/SkillsCard.module.scss";
import { Parallax, useParallax } from "react-scroll-parallax";
// import { useRef } from "react";

function About() {
  const width = useWindowCheck();

  if (width) {
    return (
      <div
        className={`${layoutStyles.container} ${layoutStyles.about_container}`}
        id="about_container"
      >
        <div className={`${svgStyles.svg_wrapper} ${svgStyles.big_circle_svg}`}>
          <Parallax speed={12}>
            <img src="/svgs/abstract-circle.svg" />
          </Parallax>
          {/* svg component */}
        </div>
        <div
          className={
            width >= 850
              ? `${layoutStyles.component} ${layoutStyles.split}`
              : `${layoutStyles.component}`
          }
        >
          <section className={layoutStyles.info_wrapper}>
            <h1>About</h1>
            <p className={layoutStyles.about_text}>
              My name’s Nick Hibbits. I’m a front-end focused web and software
              developer with experience working at a startup as well as
              initiating and managing e-commerce for a small business.
              <br />
              <br />
              I love building sleek digital experiences that make a statement
              and are a pleasure to use.
              <br />
              <br />
              When I'm not coding, I'm deep into producing electronic music, or
              likewise in the woods in my home here in South Lake Tahoe, CA.
              <br />
              <br />
              Check out my work and let’s connect.
            </p>
          </section>
          <section
            id={cardStyle.skill_card_wrapper}
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

  return null;
}

export default About;
