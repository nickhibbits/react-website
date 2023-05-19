"use client";

import { useWindowCheck } from "$/utils/customHooks";
import React from "react";

import layoutStyles from "$/styles/layout/layout.module.scss";
import appStyles from "$/styles/components/App.module.scss";

function Intro() {
  const width = useWindowCheck();
  if (width) {
    return (
      <div
        className={width < 1150 ? `${layoutStyles.component}` : ""}
        id={appStyles.home_component}
      >
        <section className={layoutStyles.info_wrapper}>
          <h1>Hi, I'm Nick</h1>
          <p>
            Welcome to my website and personal playground. <br />
            <br />
            Built using React and Sass I use this space to showcase my projects
            and try out various concepts I come across in my time spent as a web
            developer.
          </p>
        </section>
      </div>
    );
  }

  return null;
}

export default Intro;
