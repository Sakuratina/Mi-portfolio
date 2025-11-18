

import { useRef, useState } from "react";
import closedMail from "../assets/cerrado.png";
import openMail from "../assets/abierto.png";
import emailjs from "emailjs-com";

function Contact() {
  const formRef = useRef<HTMLFormElement>(null); //Guardar la referencia al formulario para enviar sus datos
  const [emailSent, setEmailSent] = useState(false); //Mostrar un mensaje tipo “Enviado correctamente”
  const [isHovered, setIsHovered] = useState(false);
  const [showForm, setShowForm] = useState(false);

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
      className="section-default py-20 text-center bg-(--color-bg) text-(--color-dark)"
    >
      <h2 className="text-4xl font-bold mb-6">Contacto</h2>
      <p className="mb-8 text-(--color-gray)">
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
        <div className="flex justify-center">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="bg-white shadow-2xl rounded-2xl p-6 w-80 flex flex-col gap-4 animate-fadeIn"
          >
            <h3 className="text-2xl font-semibold text-(--color-dark) mb-2">
              Contáctame
            </h3>
            <input
              type="text"
              name="title"
              placeholder="Asunto"
              required
              className="border border-(--color-dark) rounded-lg p-2 focus:outline-none focus:border-(--color-accent)"
            />
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              required
              className="border border-(--color-dark) rounded-lg p-2 focus:outline-none focus:border-(--color-accent)"
            />
            <input
              type="email"
              name="email"
              placeholder="Tu email"
              className="border border-(--color-dark) rounded-lg p-2 focus:outline-none focus:border-(--color-accent)"
            />
            <textarea
              name="message"
              placeholder="Tu mensaje"
              required
              className="border border-(--color-dark) rounded-lg p-2 focus:outline-none focus:border-(--color-accent) h-24 resize-none"
            ></textarea>
            <button
              type="submit"
              className="
                    bg-(--color-secondary)
                    text-white
                    px-6 py-2
                    rounded-md
                    transition duration-300
                    hover:scale-105
                    hover:bg-(--color-dark)
       "
            >
              Enviar
            </button>

            <button
              type="button"
              className="
                    text-sm
                    text-(--color-secondary)
                    border border-transparent
                    px-4 py-2
                    rounded-md
                    transition duration-300
                    hover:text-(--color-secondary)
                    hover:scale-105
                  "
              onClick={() => setShowForm(false)}
            >
              Cancelar
            </button>
          </form>
        </div>
      )}
    </section>
  );
}

export default Contact;

