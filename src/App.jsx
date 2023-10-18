/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { useState, useEffect } from "react";
import LandingPage from "./components/landingPage/LandingPage";
import MobileNavDrawer from "./components/MobileMenu/MobileMenu";
import MovieCardHeader from "./components/movieHeader/MovieCardHeader";
// import MovieCard from "./components/MovieCard/MovieCard";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";

export const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  // const [moviesId, setMoviesId] = useState([]);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [currentPage] = useState(1);

  // useEffect(() => {
  //   async function fetchMovieId() {
  //     try {
  //       const response = await fetch(
  //         `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=en-US&page=${currentPage}`
  //         // `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${currentPage}`
  //       );
  //       if (response.status >= 400) {
  //         throw new Error("server error");
  //       }
  //       const data = await response.json();
  //       const trendingMovies = data.results.splice(10);
  //       const moviesId = trendingMovies.map((movie) => movie.id.toString());
  //       // console.log(moviesId)

  //       setMoviesId(moviesId);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setTimeout(() => {
  //         setLoading(false);
  //       }, 2000);
  //     }
  //   }

  //   fetchMovieId();
  // }, []);

  // if (error)
  //   return (
  //     <div className={styles.errorState}>
  //       A network error was encountered {error}
  //     </div>
  //   );
  // if (loading) return <div className={styles.loadingState}>Loading...</div>;

  return (
    <>
      {/* <MobileNavDrawer /> */}

      <LandingPage />

      {/* <MovieCard />

      <Footer /> */}
    </>
  );
}

export default App;
