import React from "react";

import skillCardStyles from "$/styles/components/SkillsCard.module.scss";

function SkillsCard() {
  const skills = [
    {
      name: "HTML",
      level: "95%",
      id: 1,
    },
    {
      name: "CSS, Scss",
      level: "95%",
      id: 2,
    },
    {
      name: "JavaScript, TypeScript",
      level: "95%",
      id: 3,
    },
    {
      name: "React.js, Next.js",
      level: "90%",
      id: 4,
    },
    {
      name: "Node.js, REST APIs",
      level: "85%",
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
