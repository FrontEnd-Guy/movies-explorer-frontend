import React from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

function MoviesCard({ movie, isSaved, saveMovie, removeMovie }) {
  const location = useLocation();

  const handleMovieBtnClick = (evt) => {
    evt.preventDefault();
    if (location.pathname === "/movies") {
      if (!isSaved) {
        saveMovie(movie);
      } else {
        removeMovie(movie._id);
      }
    } else if (location.pathname === "/saved-movies") {
      removeMovie(movie._id);
    }
  };

  return (
    <article className="movie">
      <a
        className="movie__trailer-link"
        href={movie.trailer}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="movie__image" src={movie.image} alt={movie.title} />
      </a>
      <div className="movie__main">
        <h2 className="movie__title">{movie.title}</h2>
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
