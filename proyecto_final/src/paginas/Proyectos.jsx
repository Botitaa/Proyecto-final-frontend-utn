import Navbar from '../componentes/Navbar';
import React, { useEffect, useState, useRef } from "react";

const RickAndMortyCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        if (!response.ok) {
          throw new Error("Error al obtener los personajes");
        }
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  // Función para hacer scroll
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 1000;
      scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container-proyectos">
        <h1>Proyectos</h1>
        <h2>Consumo de API de personajes de Rick y Morty</h2>

        {loading && <p className="loading">Cargando personajes...</p>}
        {error && <p className="error">Error: {error}</p>}

        <div className="scroll-container">
          <button className="scroll-btn left" onClick={() => scroll("left")}>&#9665;</button>

          <div className="card-container" ref={scrollRef}>
            {characters.map((character) => (
              <div key={character.id} className="card">
                <img src={character.image} alt={character.name} className="card-img" />
                <h3 className="card-title">{character.name}</h3>
                <p className={`card-status ${character.status === "Alive" ? "alive" : "dead"}`}>
                  {character.status}
                </p>
              </div>
            ))}
          </div>

          <button className="scroll-btn right" onClick={() => scroll("right")}>&#9655;</button>
        </div>
      </div>
    </div>
  );
};

export default RickAndMortyCharacters;