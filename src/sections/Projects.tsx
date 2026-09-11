function Projects() {
  return (
    <section
      id="projects"
      className="section-default max-w-6xl mx-auto px-6 py-20 text-center"
    >
      <h2 className="text-4xl font-bold text-dark mb-10">
        Proyectos
      </h2>

      <div className="mb-6">
        <a
          href="https://senoscasan.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-hover transition"
        >
          Visitar Senoscasan.com
        </a>
      </div>

      <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-xl border border-gray-200">
        <iframe
          src="https://senoscasan.com"
          title="Senoscasan.com"
          className="w-full h-full"
          loading="lazy"
        />
      </div>
    </section>
  )
}

export default Projects