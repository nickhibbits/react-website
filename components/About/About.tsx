import { Righteous } from "next/font/google";

import SkillsCard from "../SkillsCard/SkillsCard";

import layoutStyles from "$/styles/layout/layout.module.scss";

import cardStyle from "$/components/SkillsCard/SkillsCard.module.scss";

export const righteous = Righteous({ weight: "400", subsets: ["latin"] });

function About() {
  return (
    <div
      className={`${layoutStyles.container} ${layoutStyles.about_container}`}
      // id="about"
    >
      <div
        className={`
      ${layoutStyles.padding_wrapper} ${layoutStyles.split} ${layoutStyles.about_component}`}
        id="about"
      >
        <section className={layoutStyles.info_wrapper}>
          <h1 className={righteous.className}>About</h1>
          <p className={layoutStyles.about_text}>
            My name&apos;s Nick Hibbits. I build sleek digital experiences that
            make a statement and are a pleasure to use.
            <br />
            <br />
            Check out my work and let&apos;s connect.
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

export default About;