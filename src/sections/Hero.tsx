import heroImage from '../assets/hero.png' // Ajusta la ruta según tu carpeta

function Hero() {
  return (
    <section className="w-full h-screen flex flex-col md:flex-row items-center justify-center text-center gap-8 bg-(--color-bg) text-(--color-dark)"
    
    >
      
      
      {/* --- TEXTO --- */}
      <div>
        <h1 className="text-6xl font-bold mb-4"
     
          >
          Hola, soy Cristina
        </h1>
        <p className="text-gray-700 mb-6 max-w-lg mx-auto">
          Desarrolladora Frontend enfocada en React y diseño limpio.
        </p>
        <a
          href="#projects"
          className="bg-(--color-accent) text-white px-8 py-3 rounded-full hover:bg-(--color-hover)"
        >
          Ver mis proyectos
        </a>
      </div>

      {/* --- IMAGEN --- */}
      <div style={{ width: '24rem', height: '24rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          src={heroImage}
          alt="Sakura"
          className="w-full h-full object-cover"
          style={{ clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)' }}
        />
      </div>
    </section>
  )
}

export default Hero
