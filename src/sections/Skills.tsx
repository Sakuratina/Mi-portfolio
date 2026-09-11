function Skills() {
  const skills = ['React', 'TypeScript', 'Tailwind', 'JavaScript', 'Git', 'Figma', 'photoshop', 'HTML', 'CSS','php', 'Laravel', 'MySQL', 'Docker', 'boostrap']; 

  return (
    <section id="skills" className="bg-bg section-default py-20 text-center">
      <h2 className="text-4xl font-bold text-dark mb-8">Habilidades</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map(skill => (
          <span
            key={skill}
            className="bg-white shadow px-5 py-2 rounded-full border text-gray hover:bg-bg"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills
