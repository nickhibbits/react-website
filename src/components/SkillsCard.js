import React from "react";
import "../styles/SkillsCard.scss";

function SkillsCard() {
  const skills = [
    {
      name: "HTML5",
      level: "90%",
      id: 1,
    },
    {
      name: "CSS3",
      level: "90%",
      id: 2,
    },
    {
      name: "JavaScript",
      level: "90%",
      id: 3,
    },
    {
      name: "React",
      level: "85%",
      id: 4,
    },
    {
      name: "REST APIs",
      level: "80%",
      id: 5,
    },
  ];
  return (
    <section className="skills-card-component">
      <p className="skills-card-title">skills</p>
      <ul className="skill-bars-wrapper">
        {skills.map((skill) => {
          return (
            <li className="skill-wrapper" key={skill.id}>
              <p className="skill-name">{skill.name}</p>
              <div className="skill-bar-wrapper">
                <div
                  className="skill-bar"
                  style={{ width: `calc(${skill.level} * .9)` }}
                />
                <p className="skill-bar-level">{skill.level}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default SkillsCard;
