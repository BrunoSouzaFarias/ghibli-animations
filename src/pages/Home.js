// /src/pages/Home.js

import React, { useContext } from 'react';
import { FilmContext } from '../context/FilmContext';

const Home = () => {
  const { filmData } = useContext(FilmContext);

  const handleFavorite = (filmId) => {
    // Implementar lógica para favoritar ou desfavoritar a animação
  };

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {filmData.map((film) => (
          <div key={film.id}>
            <h2>{film.title}</h2>
            <img src={film.image} alt={film.title} />
            <p>{film.description}</p>
            <button onClick={() => handleFavorite(film.id)}>
              Favoritar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
