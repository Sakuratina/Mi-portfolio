function Skills() {
  const skills = ['React', 'TypeScript', 'Tailwind', 'JavaScript', 'Git', 'Figma', 'Photoshop', 'HTML', 'CSS', 'PHP', 'Laravel', 'MySQL', 'Docker', 'Bootstrap']; 

  return (
    <section id="skills" className="section-default py-20 text-center" style={{ backgroundColor: 'var(--color-bg)' }}>
      <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--color-dark)' }}>Habilidades</h2>
      <p className="mb-8 max-w-2xl mx-auto" style={{ color: 'var(--color-gray)' }}>Tecnologías y herramientas que utilizo en mis proyectos</p>
      <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
        {skills.map(skill => (
          <span
            key={skill}
            className="shadow px-5 py-2 rounded-full border transition-all duration-300 transform hover:scale-105 cursor-default hover:bg-accent hover:text-white hover:border-accent"
            style={{ backgroundColor: 'var(--color-secondary)', borderColor: 'var(--color-gray)', color: 'var(--color-gray)' }}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills
