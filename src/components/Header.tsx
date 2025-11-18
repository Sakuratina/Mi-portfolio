export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo o Nombre */}
        <h1 className="text-2xl font-bold text-(--color-dark)">MiPortfolio</h1>

        {/* Navegación */}
        <nav className="hidden md:flex space-x-8 font-medium">
          <a href="#about" className="hover:text-(--color-accent)  text-(--color-dark) transition">Sobre mí</a>
          <a href="#projects" className="hover:text-(--color-accent) text-(--color-dark) transition">Proyectos</a>
          <a href="#contact" className="hover:text-(--color-accent) text-(--color-dark) transition">Contacto</a>
        </nav>

        {/* Botón CTA (Call To Action) */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-(--color-accent) text-white px-4 py-2 rounded-full hover:bg-(--color-hover) transition"
        >
          Contáctame
        </a>
      </div>
    </header>
  );
}