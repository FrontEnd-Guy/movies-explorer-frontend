import React, { useState } from "react";

export const SavedMoviesContext = React.createContext([]);

export function SavedMoviesProvider({ children }) {
  const [savedMovies, setSavedMovies] = useState([]);

  const saveMovie = (movie) => {
    setSavedMovies([...savedMovies, movie]);
  };

  const removeMovie = (id) => {
    setSavedMovies(savedMovies.filter((movie) => movie._id !== id));
  };

  return (
    <SavedMoviesContext.Provider
      value={{ savedMovies, saveMovie, removeMovie }}
    >
      {children}
    </SavedMoviesContext.Provider>
  );
}
