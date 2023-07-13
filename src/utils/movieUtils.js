export function filterMovies(movies, searchTerm, isShort) {
    return movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(searchTerm.toLowerCase()) && (isShort ? movie.duration <= 40 : true)
    );
  }