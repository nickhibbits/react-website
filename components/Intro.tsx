import { useWindowCheck } from "$/utils/customHooks";
import React from "react";

import layoutStyles from "$/styles/layout/layout.module.scss";
// import appStyles from "$/styles/components/App.module.scss";

function Intro() {
  const width = useWindowCheck();
  if (width) {
    return (
      <div className={width < 1150 ? `${layoutStyles.component}` : ""}>
        <section className={layoutStyles.info_wrapper}>
          <h1>Hi, I'm Nick</h1>
          <p>Programmer • Sound Enthusiast • Forest Dweller</p>
        </section>
      </div>
    );
  }

  return null;
}

export default Intro;
