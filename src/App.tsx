import './App.css'
import Header from "./components/Header"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import Footer from "./components/Footer"



function App() {
  return (
    <>
      {/* --- HEADER --- */}
      <Header />

      {/* --- PRINCIPAL --- */}
      <Hero />

      {/* --- PORTFOLIO --- */}
      <main className="w-full">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* --- FOOTER --- */}
      <Footer />
    </>
  )
}

export default App
