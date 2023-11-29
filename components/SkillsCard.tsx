import styles from "$/styles/components/SkillsCard.module.scss";

type Skills = {
  Front: string[];
  Back: string[];
  Other: string[];
};

function SkillsCard() {
  const skills: Skills = {
    Front: [
      "HTML",
      "CSS",
      "SCSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
    ],
    Back: ["Node.js", "Express.js", "RESTfulAPIs", "NoSQL", "AWS"],
    Other: ["Git", "Jira", "Bitbucket", "Figma", "SEO", "CMS", "Squarespace"],
  };

  Object.keys(skills)[0];

  return (
    <section className={styles.skills_card_component}>
      <p className={styles.skills_card_title}>skills</p>
      <div className={styles.skill_category_wrapper}>
        {Object.keys(skills).map((category, i) => {
          return (
            <div className={styles.skill_category}>
              <p className={styles.skill_category_title}>{category}</p>
              <ul className={styles.skill_category_list}>
                {skills[category as keyof Skills].map((skill) => (
                  <li key={skill}>{skill},</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SkillsCard;
