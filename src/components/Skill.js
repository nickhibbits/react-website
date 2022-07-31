function Skill({ title, skills }) {
  return (
    <li className="skill-component">
      <div className="skill-title">{title}</div>
      <ul className="skill-description">
        {skills.map((skill) => {
          return (
            <li className="skill-item" key={skill}>
              {skill}
            </li>
          );
        })}
      </ul>
    </li>
  );
}

export default Skill;
