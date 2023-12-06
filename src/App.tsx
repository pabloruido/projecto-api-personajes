import { FC } from 'react';
import { useState, useEffect } from 'react';

import './style.css';

export const App = () => {
  const [personajes, setPersonajes] = useState([]);

  const fetchPersonajes = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      console.log(data);
      setPersonajes(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPersonajes();
  }, []);

  return (
    <>
      <h1>Lista de Personajes </h1>
      <ul>
        {personajes.map((personaje) => (
          <li key={personaje.id}>
            <p>{personaje.name}</p>
            <img src={personaje.image} />
            <p>{personaje.status}</p>
            <p>{personaje.species}</p>
            <p>{personaje.type}</p>
            <p>{personaje.gender}</p>
            <p>{personaje.origin.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
