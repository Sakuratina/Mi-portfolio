function Projects() {
  return (
    <section
      id="projects"
      className="section-default max-w-6xl mx-auto px-6 py-20 text-center"
    >
      <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--color-dark)' }}>
        Proyectos
      </h2>
      <p className="mb-8 max-w-2xl mx-auto" style={{ color: 'var(--color-gray)' }}>
        Aquí puedes ver algunos de mis trabajos recientes
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Proyecto 1 */}
        <a
          href="https://senoscasan.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group block border-2 border-transparent hover:border-accent"
      style={{ backgroundColor: 'var(--color-secondary)' }}
        >
          <div className="h-48 bg-gradient-to-br from-accent to-orange-500 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <span className="text-white text-6xl font-bold">S</span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors" style={{ color: 'var(--color-dark)' }}>Senoscasan.com</h3>
            <p className="text-sm mb-4" style={{ color: 'var(--color-gray)' }}>
              Sitio web profesional con diseño moderno y funcionalidades optimizadas para usuarios.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs px-3 py-1 rounded-full border" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-dark)', borderColor: 'var(--color-gray)' }}>React</span>
              <span className="text-xs px-3 py-1 rounded-full border" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-dark)', borderColor: 'var(--color-gray)' }}>Tailwind</span>
              <span className="text-xs px-3 py-1 rounded-full border" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-dark)', borderColor: 'var(--color-gray)' }}>TypeScript</span>
            </div>
            <div className="inline-block w-full bg-accent text-white px-4 py-2 rounded-lg font-semibold text-center">
              Ver proyecto
            </div>
          </div>
        </a>

        {/* Proyecto placeholder para mostrar estructura */}
        <div className="rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 opacity-60" style={{ backgroundColor: 'var(--color-secondary)' }}>
          <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
            <span className="text-white text-6xl font-bold">?</span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-dark)' }}>Próximamente</h3>
            <p className="text-sm mb-4" style={{ color: 'var(--color-gray)' }}>
              Más proyectos próximamente...
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-dark)' }}>En desarrollo</span>
            </div>
            <button
              disabled
              className="inline-block w-full px-4 py-2 rounded-lg font-semibold cursor-not-allowed"
              style={{ backgroundColor: 'var(--color-gray)', color: 'var(--color-dark)' }}
            >
              Próximamente
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects