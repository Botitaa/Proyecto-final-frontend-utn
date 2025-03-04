import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaJava, FaPython } from 'react-icons/fa';
import Header from '../componentes/Header';


const cursos = [
  { title: "UTN", desc: "Curso de HTML, CSS, Bootstrap, JS y React", techs: ["HTML", "CSS", "JavaScript", "React"] },
  { title: "CoderHouse", desc: "Curso de Backend", techs: ["PHP", "Java", "Python", "MySQL"] },
  { title: "Universidad Tecnológica Nacional", desc: "Curso web fullstack", techs: ["HTML", "CSS", "JavaScript", "React"] },
  { title: "Udemy", desc: "Curso de Python", techs: ["Inteligencia Artificial", "Machine Learning", "Data Science"] },
  { title: "International Baccalaureate", desc: "Título preuniversitario de frontend y backend", techs: ["HTML", "CSS", "Microsoft Access 2016"] }
];

const iconMap = {
  HTML: <FaHtml5 className="icon-html" />,
  CSS: <FaCss3Alt className="icon-css" />,
  JavaScript: <FaJs className="icon-js" />,
  React: <FaReact className="icon-react" />,
  PHP: <FaPhp className="icon-php" />,
  Java: <FaJava className="icon-java" />,
  Python: <FaPython className="icon-python" />,
  "Inteligencia Artificial": <FaPython className="icon-ai" />,
  "Machine Learning": <FaPython className="icon-ml" />,
  "Data Science": <FaPython className="icon-ds" />,
};

export default function Formaciones() {
  return (
    <>
      <Header />
      <section className="cont-formacion">
        <div className="formacion">
          {cursos.map((curso, index) => (
            <div key={index} className="box-formacion">
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
      </section>
    </>
  );
}