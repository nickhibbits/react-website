import React from "react";

import skillCardStyles from "$/styles/components/SkillsCard.module.scss";

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
    <section className={skillCardStyles.skills_card_component}>
      <p className={skillCardStyles.skills_card_title}>skills</p>
      <ul className={skillCardStyles.skill_bars_wrapper}>
        {skills.map((skill) => {
          return (
            <li className={skillCardStyles.skill_wrapper} key={skill.id}>
              <p className={skillCardStyles.skill_name}>{skill.name}</p>
              <div className={skillCardStyles.skill_bar_wrapper}>
                <div
                  className={skillCardStyles.skill_bar}
                  style={{ width: `calc(${skill.level} * .9)` }}
                />
                <p className={skillCardStyles.skill_bar_level}>{skill.level}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default SkillsCard;
