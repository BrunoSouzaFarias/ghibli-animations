import React, { createContext, useState } from 'react';

const FilmContext = createContext();

const FilmContextProvider = ({ children, ...props }) => {
  const [filmData, setFilmData] = useState([]);

  return (
    <FilmContext.Provider value={{ filmData, setFilmData }}>
      {props.children}
    </FilmContext.Provider>
  );
};

export { FilmContext, FilmContextProvider };
