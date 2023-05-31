import { FiInstagram, FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { useWindowCheck } from "$/utils/customHooks";

import React from "react";

import layoutStyles from "$/styles/layout/layout.module.scss";
import svgStyles from "$/styles/imageStyles/svg.module.scss";
import connectStyles from "$/styles/components/Connect.module.scss";
import { Parallax } from "react-scroll-parallax";

function Connect() {
  const size = 30;
  const width = useWindowCheck();

  if (width) {
    return (
      <div
        className={`${layoutStyles.container} ${layoutStyles.connect_container}`}
        id="connect_container"
      >
        <div className={`${svgStyles.svg_wrapper} ${svgStyles.rings_svg}`}>
          <Parallax speed={-2}>
            <img src="/svgs/rings.svg" alt="" />
          </Parallax>
        </div>
        <div
          className={
            width > 850
              ? `${layoutStyles.component} ${layoutStyles.connect_component} ${layoutStyles.split}`
              : `${layoutStyles.component} ${layoutStyles.connect_component}`
          }
        >
          <section className={layoutStyles.info_wrapper}>
            <h1>Connect</h1>
            <p>Something on your mind? Shoot me a message!</p>
          </section>
          <section className={connectStyles.contact_wrapper}>
            <p>
              Reach me directly at&nbsp;
              <a
                href="mailto:nicholashibbits@gmail.com"
                className={connectStyles.social_anchor}
                data-type="email-link"
                style={{ textDecoration: "underline" }}
              >
                nicholashibbits@gmail
              </a>
              <br />
              or checkout my socials below
            </p>

            <div className={connectStyles.socials_wrapper}>
              <a
                href="https://www.instagram.com/nhibit"
                className={connectStyles.social_anchor}
              >
                <FiInstagram size={size} />
              </a>
              <a
                href="https://www.github.com/nickhibbits"
                className={connectStyles.social_anchor}
              >
                <FiGithub size={size} />
              </a>
              <a
                href="https://www.linkedin.com/in/nicholas-hibbits/"
                className={connectStyles.social_anchor}
              >
                <FiLinkedin size={size} />
              </a>
            </div>
          </section>
        </div>
      </div>
    );
  }

  return null;
}

export default Connect;
