import React, { useContext } from "react";
import "./SavedMovies.css";
import { SavedMoviesContext } from "../../providers/SavedMoviesProvider";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies() {
  const { savedMovies, removeMovie } = useContext(SavedMoviesContext);

  return (
    <main className="saved-movies">
      <SearchForm />
      <MoviesCardList
        movies={savedMovies}
        isSaved={() => true}
        saveMovie={() => {}}
        removeMovie={removeMovie}
      />
    </main>
  );
}

export default SavedMovies;
