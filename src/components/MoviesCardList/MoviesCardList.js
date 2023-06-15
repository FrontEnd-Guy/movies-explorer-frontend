import React, { useState } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, isSaved, saveMovie, removeMovie }) {
  let initialMoviesPerPage = 16;

  if (window.matchMedia("(max-width: 520px)").matches) {
    initialMoviesPerPage = 5;
  } else if (window.matchMedia("(max-width: 800px)").matches) {
    initialMoviesPerPage = 8;
  } else {
    initialMoviesPerPage = 16;
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(initialMoviesPerPage);

  const indexOfLastMovie = currentPage * moviesPerPage;

  const currentMovies = movies.slice(0, indexOfLastMovie);

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  const isLoadMoreButtonDisabled = currentMovies.length === movies.length;

  return (
    <section className="movies-list">
      <ul className="movies-list__items">
        {currentMovies.map((movie) => (
          <li key={movie._id}>
            <MoviesCard
              movie={movie}
              isSaved={isSaved(movie)}
              saveMovie={saveMovie}
              removeMovie={removeMovie}
            />
          </li>
        ))}
      </ul>
      <div className="movies-list__button-container">
        {!isLoadMoreButtonDisabled && (
          <button className="movies-list__button" onClick={handleLoadMore}>
            Ещё
          </button>
        )}
      </div>
    </section>
  );
}

export default MoviesCardList;
