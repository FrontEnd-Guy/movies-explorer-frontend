import React, { useContext } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { SavedMoviesContext } from "../../providers/SavedMoviesProvider";

function Movies({ movies }) {
  const { savedMovies, saveMovie, removeMovie } =
    useContext(SavedMoviesContext);

  const isSaved = (movie) =>
    savedMovies.some((savedMovie) => savedMovie._id === movie._id);

  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList
        movies={movies}
        isSaved={isSaved}
        saveMovie={saveMovie}
        removeMovie={removeMovie}
      />
    </main>
  );
}

export default Movies;
