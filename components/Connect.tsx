import { FiInstagram, FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

import layoutStyles from "$/styles/layout/layout.module.scss";

import connectStyles from "$/styles/components/Connect.module.scss";

function Connect() {
  const size = 30;

  return (
    <div
      className={`${layoutStyles.container} ${layoutStyles.connect_container}`}
      id="connect_container"
    >
      <div
        className={`${layoutStyles.component} ${layoutStyles.connect_component}`}
      >
        <section className={layoutStyles.info_wrapper}>
          <h1>Connect</h1>
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

  return null;
}

export default Connect;
