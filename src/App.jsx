/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from "react";
import LandingPage from "./components/landingPage/LandingPage";
import MovieCardHeader from "./components/movieHeader/MovieCardHeader";
import MovieCard from "./components/MovieCard/MovieCard";
import Footer from "./components/footer/Footer";
import styles from "./App.module.css";

export const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  const [moviesId, setMoviesId] = useState([]);

  useEffect(() => {
    async function fetchMovieId() {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
      );
      const data = await response.json();
      const trendingMovies = data.results.splice(8);
      const moviesId = trendingMovies.map((movie) => movie.id.toString());

      setMoviesId(moviesId);
    }

    fetchMovieId();
  }, []);

  return (
    <>
      <LandingPage />

      <div className={styles.containerWrapper}>
        <MovieCardHeader title="Feature Movie" subTitle="See more" />

        <div className={styles.cardWrapper}>
          {moviesId.map((id) => (
            <MovieCard key={id} id={id} />
          ))}
        </div>

        <div className={styles.mobileNav}>
          <button className={styles.mobileNavBtn} disabled>
            show more
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
