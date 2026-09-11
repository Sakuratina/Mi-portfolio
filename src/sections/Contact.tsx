

import { useRef, useState, useEffect } from "react";
import closedMail from "../assets/cerrado.png";
import openMail from "../assets/abierto.png";
import emailjs from "emailjs-com";

function Contact() {
  const formRef = useRef<HTMLFormElement>(null); //Guardar la referencia al formulario para enviar sus datos
  const [emailSent, setEmailSent] = useState(false); //Mostrar un mensaje tipo “Enviado correctamente”
  const [isHovered, setIsHovered] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // Ocultar popup automáticamente después de 3 segundos
  useEffect(() => {
    if (emailSent) {
      const timer = setTimeout(() => setEmailSent(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [emailSent]);

  //ENVIO DE EMAIL CON EMAILJS
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formRef.current) return

    emailjs.sendForm(
      "service_osvcu6o",        //Service ID
      "template_ipdw6ip",       //Template ID
      formRef.current,
      "DOM1UZe1PwGpg0aR2"         //Public Key
    )
      .then(() => {
        setEmailSent(true)
        formRef.current?.reset()
      })
      .catch((error) => {
        console.error("Error al enviar:", error)
      })
  }
  return (
    <section
      id="contact"
      className="section-default py-20 text-center" style={{ color: 'var(--color-dark)' }}
    >
      <h2 className="text-4xl font-bold mb-6">Contacto</h2>
      <p className="mb-8" style={{ color: 'var(--color-gray)' }}>
        ¿Quieres colaborar conmigo? ¡Hablemos!
      </p>

      {/* Imagen o formulario */}
      {!showForm ? (
        <div className="flex justify-center">
          <img
            src={isHovered ? openMail : closedMail}
            alt="Contáctame"
            className="w-32 h-auto cursor-pointer transition-transform duration-300 hover:scale-110 drop-shadow-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setShowForm(true)}
          />
        </div>
      ) : (
        <div className="flex justify-center relative">


          <form


            ref={formRef}
            onSubmit={sendEmail}
            className="shadow-2xl rounded-2xl p-6 w-80 flex flex-col gap-4 animate-fadeIn" style={{ backgroundColor: 'var(--color-secondary)' }}
          >
            <h3 className="text-2xl font-semibold mb-2" style={{ color: 'var(--color-dark)' }}>
              Contáctame
            </h3>
            <input
              type="text"
              name="title"
              placeholder="Asunto"
              required
              className="border rounded-lg p-2 focus:outline-none focus:border-accent" style={{ borderColor: 'var(--color-dark)', backgroundColor: 'var(--color-bg)', color: 'var(--color-dark)' }}
            />
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              required
              className="border rounded-lg p-2 focus:outline-none focus:border-accent" style={{ borderColor: 'var(--color-dark)', backgroundColor: 'var(--color-bg)', color: 'var(--color-dark)' }}
            />
            <input
              type="email"
              name="email"
              placeholder="Tu email"
              className="border rounded-lg p-2 focus:outline-none focus:border-accent" style={{ borderColor: 'var(--color-dark)', backgroundColor: 'var(--color-bg)', color: 'var(--color-dark)' }}
            />
            <textarea
              name="message"
              placeholder="Tu mensaje"
              required
              className="border rounded-lg p-2 focus:outline-none focus:border-accent h-24 resize-none"
              style={{ borderColor: 'var(--color-dark)', backgroundColor: 'var(--color-bg)', color: 'var(--color-dark)' }}
            ></textarea>
            <button
              type="submit"
              className="
                    bg-secondary
                    text-white
                    px-6 py-2
                    rounded-md
                    transition duration-300
                    hover:scale-105
                    hover:bg-dark
       "
              style={{ color: 'var(--color-button-text)', backgroundColor: 'var(--color-accent)' }}
            >
              Enviar
            </button>

            <button
              type="button"
              className="
                    text-sm
                    text-white
                    border border-transparent
                    px-4 py-2
                    rounded-md
                    transition duration-300
                    hover:scale-105
                  "
              onClick={() => setShowForm(false)}
              style={{ color: 'var(--color-button-text)', backgroundColor: 'var(--color-gray)' }}
            >
              Cancelar
            </button>


          </form>
          {emailSent && (
            <div className="absolute top-0 right-0 bg-accent text-white px-4 py-2 rounded shadow-lg animate-fadeIn">
              ¡Correo enviado correctamente!
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default Contact;

