import Navbar from '../componentes/Navbar';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Sobremi() {
  return (
    <>
      <Navbar />
      <section className="sobre-mi">
        <div>
          <img src="https://avatars.githubusercontent.com/u/47467914?v=4" alt="foto carnet" />
          <button>Disponible para trabajar</button>
        </div>
        <div>
          <h1>Agustín Botana</h1>
          <h2 style={{ color: "greenyellow" }}>Desarrollador especializado en Python y Frontend
            <br />con HTML, CSS, JS y React.</h2>
          <p>
            Soy un apasionado por la complejidad de cada algoritmo,
            <br />siempre busco mejorar, explorando nuevos conocimientos.
            <br />Valoro la dedicación y el trabajo en equipo.
          </p>
          <div className="iconos">
            <a
              href="https://www.linkedin.com/in/agust%C3%ADn-botana/"
              target="_blank"
              className="icono"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="https://github.com/Botitaa"
              target="_blank"
              className="icono"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="mailto:agusbotana@hotmail.com" className="icono">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}