function Skill({ title, skills }) {
  return (
    <li className="skill-component">
      <div className="skill-title">{title}</div>
      <ul className="skill-description">
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
    </li>
  );
}

export default Skill;
