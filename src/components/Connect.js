import { useWindowCheck } from "../customHooks";

import React from "react";

import "../styles/components/Connect.scss";

function Connect() {
  const width = useWindowCheck();
  return (
    <div className="container connect-container">
      <div
        className={
          width > 1100
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
          <input type="text-area" className="message-input" />
        </form>
      </div>
    </div>
  );
}

export default Connect;
