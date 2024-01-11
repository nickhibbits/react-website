import layoutStyles from "$/styles/layout/layout.module.scss";
import introStyles from "$/components/Intro/Intro.module.scss";

import { Righteous } from "next/font/google";
export const righteous = Righteous({ weight: "400", subsets: ["latin"] });

function Intro() {
  return (
    <div className={layoutStyles.intro_container}>
      <div className={`${layoutStyles.component} ${introStyles.intro_wrapper}`}>
        <section className={layoutStyles.info_wrapper}>
          <h1 className={righteous.className}>Hi, I&apos;m Nick</h1>
          <p className={introStyles.sub_title}>Web Engineer</p>
        </section>
      </div>
    </div>
  );
}

export default Intro;
