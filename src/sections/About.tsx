function About() {
  return (
    <section id="about" className="relative w-full section-default mx-auto px-6 py-20 text-center
             before:absolute before:inset-0 before:bg-[url('/src/assets/back.svg')]
             before:bg-cover before:bg-center before:opacity-60 before:-z-10">
      
      <h2 className="text-4xl font-bold text-(--color-dark) mb-6">Sobre mí</h2>
      <p className="text-(--color-dark) max-w-2xl mx-auto font-medium">
        Soy una desarrolladora frontend creativa y enfocada en construir experiencias web modernas y visualmente atractivas.
        Me encanta trabajar en equipo y aportar ideas que sumen tanto al diseño como al producto final, manteniendo siempre una actitud positiva y colaborativa.
      </p>
    </section>
  )
}

export default About
