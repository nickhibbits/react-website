import "../styles/About.css";
import Socials from "./Socials";
export function About() {
  return (
    <div className="about-component">
      <div className="title-socials-wrapper">
        <div className="profile">Profile</div>
        <Socials />
      </div>
      <div className="profile-wrapper">
        <div className="profile-title">Skills</div>
        <ul className="skills-list">
          <li className="skill-item">
            <div className="skill-title">Front-end</div>
            <ul className="skill-description">
              <li>React</li>
              <li>Svelte</li>
              <li>HTML + CSS</li>
            </ul>
          </li>
          <li className="skill-item">
            <div className="skill-title">Back-end</div>
            <ul className="skill-description">
              <li>Firebase</li>
              <li>Node</li>
            </ul>
          </li>
          <li className="skill-item">
            <div className="skill-title">Other Tools</div>
            <ul className="skill-description">
              <li>REST APIs</li>
              <li>Git</li>
              <li>Typescript</li>
              <li>Redux</li>
              <li>Jest</li>
            </ul>
          </li>
          <li className="skill-item">
            <div className="skill-title">Misc</div>
            <ul className="skill-description">
              <li>E-Commerce managment </li>
              <li>SEO</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="profile-wrapper">
        <div className="profile-title">About</div>
        <div className="profile-description">
          I'm a front-end focused developer with experience working at a startup
          as well as performing ecommerce managment for a small business.
          <br />
          <br /> Check out my work and let's connect.
        </div>
      </div>
    </div>
  );
}

export default About;
