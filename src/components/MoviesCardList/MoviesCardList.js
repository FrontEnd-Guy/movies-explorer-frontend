import React, { useState, useEffect } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, isSaved, saveMovie, removeMovie }) {
  const settings = [
    { width: 1280, moviesPerPage: 16, addMovies: 4 },
    { width: 990, moviesPerPage: 9, addMovies: 3 },
    { width: 768, moviesPerPage: 8, addMovies: 2 },
    { width: 320, moviesPerPage: 5, addMovies: 2 }
  ];
  const [windowDimensions, setWindowDimensions] = useState(window.innerWidth);
  const [moviesPerPage, setMoviesPerPage] = useState(0);
  const [addMovies, setAddMovies] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const resizeListener = () => {
      clearTimeout(window.resizeTimeout);
      window.resizeTimeout = setTimeout(() => {
        setWindowDimensions(window.innerWidth);
      }, 500);
    };

    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  useEffect(() => {
    const currentSetting = settings.find(
      (setting) => windowDimensions >= setting.width
    ) || settings[0];
    setMoviesPerPage(currentSetting.moviesPerPage);
    setAddMovies(currentSetting.addMovies);
  }, [windowDimensions, settings]);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const currentMovies = movies.slice(0, indexOfLastMovie);

  const handleLoadMore = () => {
    setCurrentPage(currentPage + addMovies/moviesPerPage);
  };

  const isLoadMoreButtonDisabled = currentMovies.length === movies.length;

  return (
    <section className="movies-list">
      <ul className="movies-list__items">
        {currentMovies.map((movie) => (
          <li key={movie._id || movie.id} >
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
            More
          </button>
        )}
      </div>
    </section>
  );
}

export default MoviesCardList;
