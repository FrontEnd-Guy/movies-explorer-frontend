import React, { useState, useContext, useEffect, useCallback } from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import { SavedMoviesContext } from "../../providers/SavedMoviesProvider";

function MoviesCard({ movie, saveMovie, removeMovie }) {
  const location = useLocation();
  const { savedMovies } = useContext(SavedMoviesContext);

  const [isSaved, setIsSaved] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [foundMovie, setFoundMovie] = useState(null);

  useEffect(() => {
    const found = savedMovies.find((savedMovie) => savedMovie.movieId === movie.id);
    setFoundMovie(found);
    setIsSaved(!!found);
  }, [movie.id, savedMovies]);

  useEffect(() => {
    if (typeof movie.image === "object") {
      setImageUrl(`https://api.nomoreparties.co/${movie.image.url}`);
    } else if (typeof movie.image === "string") {
      setImageUrl(movie.image);
    }
  }, [movie.image]);

  const handleMovieBtnClick = useCallback(async (evt) => {
    evt.preventDefault();

    if (location.pathname === "/movies") {
      if (!isSaved) {
        saveMovie(movie);
      } else {
        if(foundMovie && foundMovie._id) {
          removeMovie(foundMovie._id)
        }
      }
    } else if (location.pathname === "/saved-movies") {
      if(movie._id) {
        removeMovie(movie._id);
      }
    }
  }, [isSaved, movie, location.pathname, foundMovie, saveMovie, removeMovie]);

  return (
    <article className="movie">
      <a
        className="movie__trailer-link"
        href={movie.trailerLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="movie__image" src={imageUrl} alt={movie.nameEN} />
      </a>
      <div className="movie__main">
        <h2 className="movie__title">{movie.nameRU}</h2>
        <button
          className={`movie__button ${
            location.pathname === "/movies"
              ? `movie__like-button ${isSaved ? "movie__button_active" : ""}`
              : "movie__delete-button"
          }`}
          type="button"
          onClick={handleMovieBtnClick}
        />
      </div>
      <span className="movie__duration">
        {movie.duration > 59 ? `${Math.floor(movie.duration / 60)} ч` : null}{" "}
        {movie.duration > 59
          ? `${movie.duration - Math.floor(movie.duration / 60) * 60} м`
          : `${movie.duration} м`}
      </span>
    </article>
  );
}

export default MoviesCard;