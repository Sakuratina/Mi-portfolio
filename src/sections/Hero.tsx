import heroImage from '../assets/hero.png' 

function Hero() {
  return (
    <section className="w-full h-screen flex flex-col md:flex-row items-center justify-center text-center gap-12 relative overflow-hidden" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-dark)' }}>
      
      
      {/* --- TEXTO --- */}
      <div className="z-10 animate-fadeIn">
        <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-dark to-accent bg-clip-text text-transparent">
          Hola, soy Cristina
        </h1>
        <p className="mb-8 max-w-lg mx-auto text-lg" style={{ color: 'var(--color-gray)' }}>
          Desarrolladora fullstack enfocada en React y diseño limpio.
        </p>
        <a
          href="#projects"
          className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Ver mis proyectos
        </a>
      </div>

      {/* --- IMAGEN --- */}
      <div className="z-10 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
        <div style={{ width: '24rem', height: '24rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src={heroImage}
            alt="Sakura"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            style={{ clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)' }}
          />
        </div>
      </div>

      {/* --- DECORATIVE ELEMENTS --- */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl"></div>
    </section>
  )
}

export default Hero
