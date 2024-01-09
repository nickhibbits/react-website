import layoutStyles from "$/styles/layout/layout.module.scss";

import { Righteous } from "next/font/google";
export const righteous = Righteous({ weight: "400", subsets: ["latin"] });

function Intro() {
  return (
    <div className={layoutStyles.component}>
      <section
        className={`${layoutStyles.info_wrapper} ${layoutStyles.intro_wrapper}`}
      >
        <>
          <h1 className={righteous.className}>Hi, I&apos;m Nick</h1>
          <ul className={layoutStyles.title_list}>
            <li className={layoutStyles.title}>Programmer</li>
            <li className={layoutStyles.title}>• Sound Enthusiast</li>
            <li className={layoutStyles.title}>• Forest Dweller</li>
          </ul>
        </>
      </section>
    </div>
  );

  return null;
}

export default Intro;
