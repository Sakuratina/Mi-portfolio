export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/*  Nombre */}
        <h1 className="text-2xl font-bold text-dark">MiPortfolio</h1>

        {/* Navegación */}
        <nav className="hidden md:flex space-x-8 font-medium">
          <a href="#about" className="hover:text-accent text-dark transition">Sobre mí</a>
          <a href="#projects" className="hover:text-accent text-dark transition">Proyectos</a>
          <a href="#contact" className="hover:text-accent text-dark transition">Contacto</a>
        </nav>

        {/* Botón CTA (Call To Action) */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-accent text-white px-4 py-2 rounded-full hover:bg-hover transition"
        >
          Contáctame
        </a>
      </div>
    </header>
  );
}