import Header from '../componentes/Header';


export default function Sobremi() {
  return (
    <>
      <Header />
      <section className="sobre-mi">
        <div>
          <img src="https://avatars.githubusercontent.com/u/47467914?v=4" alt="foto carnet" />
          <button>Disponible para trabajar</button>
        </div>
        <div>
          <h1>Agustín Botana</h1>
          <h2 style={{ color: "greenyellow" }}>Desarrollador especializado en Python y Frontend con HTML, CSS, JS y React.</h2>
          <p>
            Soy un apasionado por la complejidad de cada algoritmo.
            <br />Siempre busco mejorar, explorando nuevos conocimientos.
            <br />Valoro la dedicación y el trabajo en equipo.
          </p>
          <div className="iconos">
            <a href="https://www.linkedin.com/in/agust%C3%ADn-botana/" target="_blank" className="icono" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/Botitaa" target="_blank" className="icono" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:agusbotana@hotmail.com" className="icono">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}