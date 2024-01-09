import { Righteous } from "next/font/google";

import SkillsCard from "./SkillsCard";

import layoutStyles from "$/styles/layout/layout.module.scss";

import cardStyle from "$/styles/components/SkillsCard.module.scss";
export const righteous = Righteous({ weight: "400", subsets: ["latin"] });

function About() {
  return (
    <div
      className={`${layoutStyles.container} ${layoutStyles.about_container}`}
      id="about_container"
    >
      <div className={layoutStyles.component}>
        <section className={layoutStyles.info_wrapper}>
          <h1 className={righteous.className}>About</h1>
          <p className={layoutStyles.about_text}>
            My name&apos;s Nick Hibbits. I&apos;m a full stack web developer
            with experience working at a startup as well as managing e-commerce
            for a small business.
            <br />
            <br />
            I love building sleek digital experiences that make a statement and
            are a pleasure to use.
            <br />
            <br />
            When I&apos;m not coding, I&apos;m deep into producing electronic
            music, or likewise in the woods, here at home in South Lake Tahoe,
            CA.
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

  return null;
}

export default About;
