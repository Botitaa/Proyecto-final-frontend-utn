import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaPython } from 'react-icons/fa';
import Navbar from '../componentes/Navbar';

const cursos = [
  { title: "Universidad Tecnológica Nacional", desc: "Curso frontend", techs: ["HTML", "CSS", "JavaScript", "React"] },
  { title: "Universidad Tecnológica Nacional", desc: "Curso de Backend", techs: ["Python", "MySQL"] },
  { title: "Universidad Tecnológica Nacional", desc: "Tecnicatura Universitaria en Programación", techs: ["Java", "Python", "MySQL", "C"] },
  { title: "Udemy", desc: "Curso de Python", techs: ["Inteligencia Artificial", "Machine Learning", "Data Science"] },
  { title: "International Baccalaureate", desc: "Título preuniversitario de frontend y backend", techs: ["HTML", "CSS", "Microsoft Access 2016"] }
];

const iconMap = {
  HTML: <FaHtml5 className="icon-html" />,
  CSS: <FaCss3Alt className="icon-css" />,
  JavaScript: <FaJs className="icon-js" />,
  React: <FaReact className="icon-react" />,
  Java: <FaJava className="icon-java" />,
  Python: <FaPython className="icon-python" />,
  "Inteligencia Artificial": <FaPython className="icon-ai" />,
  "Machine Learning": <FaPython className="icon-ml" />,
  "Data Science": <FaPython className="icon-ds" />,
};

const colores = ["#000000", "#b7950b", "#273746", "#A833FF", "#21618c"];

export default function Formacion() {
  return (
    <>
      <Navbar />
      <div className="cont-formacion">
        <div className="formacion">
          {cursos.map((curso, index) => (
            <div
              key={index}
              className="box-formacion"
              style={{ backgroundColor: colores[index % colores.length] }}
            >
              <h1>{curso.title}</h1>
              <p>{curso.desc}</p>
              <ul className="box-languages">
                {curso.techs.map((tech, i) => (
                  <li key={i} className="language">
                    {iconMap[tech]} {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}