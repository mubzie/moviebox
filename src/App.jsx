/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { useState, useEffect } from "react";
import LandingPage from "./components/landingPage/LandingPage";
import MovieCardHeader from "./components/movieHeader/MovieCardHeader";
import MovieCard from "./components/MovieCard/MovieCard";
import Footer from "./components/footer/Footer";
import styles from "./App.module.css";

export const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  const [moviesId, setMoviesId] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovieId() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
        );
        if (response.status >= 400) {
          throw new Error("server error");
        }
        const data = await response.json();
        const trendingMovies = data.results.splice(10);
        const moviesId = trendingMovies.map((movie) => movie.id.toString());

        setMoviesId(moviesId);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMovieId();
  }, []);

  if (error)
    return (
      <div className={styles.errorState}>
        A network error was encountered eror.message
      </div>
    );
  if (loading) return <div className={styles.loadingState}>Loading...</div>;

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
