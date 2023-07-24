const getMovies = async () => {
    const res = await fetch('https://api.nomoreparties.co/beatfilm-movies');
    const data = await res.json();
  
    if (!res.ok) {
      throw new Error(data.message);
    }
  
    return data;
  }
  
  const MoviesApi = {
    getMovies
  };
  
  export default MoviesApi;
  