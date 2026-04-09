const skills = [
  'JavaScript',
  'React',
  'Node.js',
  'SCSS',
  'MongoDB',
  'Git',
]

function SkillsStrip() {
  return (
    <section className="skills-strip">
      <div className="skills-strip__inner container">
        {skills.map((skill) => (
          <span key={skill} className="skills-strip__item">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default SkillsStrip
