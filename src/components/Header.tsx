import { useTheme } from '../hooks/useTheme';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100 z-50" style={{ backgroundColor: 'var(--color-secondary)' }}>
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/*  Nombre */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
          MiPortfolio
        </h1>

        {/* Navegación */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#about" 
            className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium relative group"
            style={{ color: 'var(--color-dark)' }}
          >
            Sobre mí
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-200 group-hover:w-full"></span>
          </a>
          <a 
            href="#skills" 
            className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium relative group"
            style={{ color: 'var(--color-dark)' }}
          >
            Habilidades
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-200 group-hover:w-full"></span>
          </a>
          <a 
            href="#projects" 
            className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium relative group"
            style={{ color: 'var(--color-dark)' }}
          >
            Proyectos
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-200 group-hover:w-full"></span>
          </a>
        </nav>

        {/* Botón CTA (Call To Action) */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-orange-600 text-white px-5 py-2.5 rounded-full hover:bg-orange-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg font-medium"
        >
          Contáctame
        </a>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <svg className="w-6 h-6 text-gray-700" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-700" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}