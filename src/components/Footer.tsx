function Footer() {
  return (
    <footer className="py-8 text-center border-t mt-20" style={{ color: 'var(--color-gray)', borderColor: 'var(--color-gray)', backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <p className="mb-4">© 2026 Cristina León Romero. Todos los derechos reservados.</p>
        <div className="flex justify-center gap-6">
          <a href="https://github.com/Sakuratina" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: 'var(--color-gray)' }}>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/cristina-leon-romero/" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: 'var(--color-gray)' }}>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
