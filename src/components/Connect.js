import { useWindowCheck } from "../customHooks";
import { ReactComponent as RingsSvg } from "../assets/svgs/rings.svg";
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
// import { IconContext } from "react-icons";

import React from "react";

import "../styles/components/Connect.scss";
import "../styles/imageStyles/svg.scss";

function Connect() {
  const size = 30;
  const width = useWindowCheck();
  return (
    <div className="container" id="connect-container">
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
        <section className="contact-wrapper">
          <p>
            Reach me directly at&nbsp;
            <a
              href="mailto:nicholashibbits@gmail.com"
              className="social-anchor"
              data-type="email-link"
              style={{ textDecoration: "underline" }}
            >
              nicholashibbits@gmail
            </a>
            <br />
            or checkout my socials below
          </p>
          <div className="socials-wrapper">
            <a
              href="https://www.instagram.com/nhibit"
              className="social-anchor"
            >
              <FiInstagram size={size} />
            </a>
            <a
              href="https://www.github.com/nickhibbits"
              className="social-anchor"
            >
              <FiGithub size={size} />
            </a>
            <a
              href="https://www.linkedin.com/in/nicholas-hibbits/"
              className="social-anchor"
            >
              <FiLinkedin size={size} />
            </a>
          </div>
        </section>
        {/* <form className="connect-form" action="">
          <p className="subject">Subject</p>
          <input type="text" className="subject-input" />
          <p className="message">Message</p>
          <textarea className="message-input" />
        </form> */}
      </div>
    </div>
  );
}

export default Connect;
