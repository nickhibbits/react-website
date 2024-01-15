import { Righteous } from "next/font/google";
export const righteous = Righteous({ weight: "400", subsets: ["latin"] });

import { FiInstagram, FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

import layoutStyles from "$/styles/layout/layout.module.scss";

import connectStyles from "$/components/Connect/Connect.module.scss";

function Connect() {
  const size = 30;

  return (
    <div
      className={`${layoutStyles.container} ${layoutStyles.connect_container}`}
    >
      <div
        className={`${layoutStyles.padding_wrapper} ${layoutStyles.connect_component} ${layoutStyles.split}`}
        id="connect"
      >
        <section className={layoutStyles.info_wrapper}>
          <h1 className={righteous.className}>Connect</h1>
          <p>Something on your mind?</p>
        </section>
        <section className={connectStyles.contact_wrapper}>
          <p>
            <br />
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
            or checkout my socials below.
          </p>

          <div className={connectStyles.socials_wrapper}>
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

export default Connect;
