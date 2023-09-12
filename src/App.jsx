/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from "react";
import MovieCard from "./components/movieCard";

export const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  const [moviesId, setMoviesId] = useState([]);

  useEffect(() => {
    async function fetchMovieId() {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
      );
      const data = await response.json();
      const trendingMovies = data.results.splice(10);
      const moviesId = trendingMovies.map((movie) => movie.id.toString());

      setMoviesId(moviesId);
    }

    fetchMovieId();
  }, []);

  return (
    <>
      <div>
        <h1>Movie List</h1>
      </div>
      {moviesId.map((id) => (
        <MovieCard key={id} id={id} />
      ))}
    </>
  );
}

export default App;
