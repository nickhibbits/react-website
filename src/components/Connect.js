import { useWindowCheck } from "../customHooks";
import { ReactComponent as RingsSvg } from "../assets/svgs/rings.svg";

import React from "react";

import "../styles/components/Connect.scss";
import "../styles/imageStyles/svg.scss";

function Connect() {
  const width = useWindowCheck();
  return (
    <div className="container connect-container">
      <div className="svg-wrapper rings-svg">
        <RingsSvg />
      </div>
      <div
        className={
          width > 850
            ? `component connect-component split`
            : `component connect-component`
        }
      >
        <section className="info-wrapper">
          <h1>Connect</h1>
          <p>Something on your mind? Shoot me a message!</p>
        </section>
        <form className="connect-form" action="">
          <p className="subject">Subject</p>
          <input type="text" className="subject-input" />
          <p className="message">Message</p>
          <textarea className="message-input" />
        </form>
      </div>
    </div>
  );
}

export default Connect;
