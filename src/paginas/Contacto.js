import Header from '../componentes/Header';

export default function Contacto() {
  return (
    <>
      <Header />
      <div>
        <form className="contacto">
          <label htmlFor="nombreApellido">Nombre completo</label>
          <input type="text" id="nombreApellido" placeholder="Juan Pérez" required />

          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" placeholder="ejemplo@correo.com" required />

          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" rows="4" placeholder="Escribe tu mensaje..." required></textarea>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  )
}