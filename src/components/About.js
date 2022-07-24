import "../styles/About.css";
import Socials from "./Socials";
import Skill from "./Skill";
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
          <Skill
            title={"Front-End"}
            skills={["React", "Svelte", "HTML + CSS"]}
          />
          <Skill title={"Back-End"} skills={["Firebase", "Node"]} />
          <Skill
            title={"Other Tools"}
            skills={["REST APIs", "Git", "TypeScript", "Redux", "Jest"]}
          />
          <Skill title={"Misc"} skills={["E-Commerce Management", "SEO"]} />
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
