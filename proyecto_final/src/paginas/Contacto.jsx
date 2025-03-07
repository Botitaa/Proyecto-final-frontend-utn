import React, { useState } from 'react';
import Navbar from '../componentes/Navbar';

export default function Contacto() {
  // Estados para almacenar los valores del formulario
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  // Función para el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // Mostrar los datos en un alert
    alert(`Datos del formulario:\n\nNombre: ${nombre}\nCorreo: ${email}\nMensaje: ${mensaje}`);

    // Limpiar el formulario después de enviar, sin esto se veria los datos que escribiste en las cajas de texto
    setNombre('');
    setEmail('');
    setMensaje('');
  };

  return (
    <>
      <Navbar />
      <div>
        <form className="contacto" onSubmit={handleSubmit}>
          <label htmlFor="nombreApellido">Nombre completo</label>
          <input
            type="text"
            id="nombreApellido"
            placeholder="Nombre y Apellido"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />

          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            placeholder="ejemplo@correo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            rows="4"
            placeholder="Escribe tu mensaje..."
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          ></textarea>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
}