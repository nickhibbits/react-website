import "../styles/About.css";
export function About() {
  return (
    <div className="about-component">
      <div className="profile">Profile</div>
      <div className="skills-wrapper">
        <div className="skills-title">Skills</div>
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
    </div>
  );
}

export default About;
