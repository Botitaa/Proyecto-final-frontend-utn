import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobremi from "./paginas/Sobre-mi";
import Proyectos from "./paginas/Proyectos";
import Formacion from "./paginas/Formacion";
import Contacto from "./paginas/Contacto";
import NotFound from "./paginas/NotFound";

import "./App.css";


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Sobremi />} />
          <Route path="/sobre-mi" element={<Sobremi />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/formacion" element={<Formacion />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}