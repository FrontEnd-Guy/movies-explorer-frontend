import React, { useContext, useEffect, useState, useMemo } from "react";
import "./SavedMovies.css";
import { SavedMoviesContext } from "../../providers/SavedMoviesProvider";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import MainApi from "../../utils/MainApi";
import { filterMovies } from "../../utils/movieUtils";

function SavedMovies() {
  const { savedMovies, setSavedMovies, removeMovie } = useContext(SavedMoviesContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [formError, setFormError] = useState(null);

  const filteredMovies = useMemo(() => filterMovies(savedMovies, searchTerm, isChecked), [savedMovies, searchTerm, isChecked]);
  
  useEffect(() => {
    const fetchSavedMovies = async () => {
      try {
        const movies = await MainApi.getMovies();
        setSavedMovies(movies);
      } catch(error) {
        console.log(error)
      }
    };

    fetchSavedMovies();
  }, []);

  function handleSearch(term, isChecked) {
    setSearchTerm(term);
    setIsChecked(isChecked);
  }

  return (
    <main className="saved-movies">
      <SearchForm onSubmit={handleSearch} searchTerm={searchTerm || ''} onError={setFormError} isOnSavedMoviesPage={true} />
      {formError && <p>{formError}</p>}
      {filteredMovies.length === 0 && <p>Ничего не найдено</p>}
      <MoviesCardList
        movies={filteredMovies}
        isSaved={() => true}
        saveMovie={() => {}}
        removeMovie={removeMovie}
      />
    </main>
  );
}

export default SavedMovies;
