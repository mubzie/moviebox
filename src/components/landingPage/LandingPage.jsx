/* eslint-disable react/prop-types */
import React from "react";
import { useState, useEffect } from "react";
import Header from "../header/Header";
import styles from "./LandingPage.module.css";
import Star from "/src/assets/Star.png";
import Play from "/src/assets/Play.png";
// import Star from '/public/Star.png'

const apiKey = import.meta.env.VITE_API_KEY;

const LandingPage = () => {
  const [homeMovie, setHomeMovie] = useState([]);
  const [movieCount, setmovieCount] = useState([0, 1, 2, 3, 4]);
  const [itemsPerPage] = useState(1);
  const [currentPage] = useState(63);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const basePosterUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    let requiredData = [];

    async function fetchTopRated() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${currentPage}`
        );
        const data = await response.json();

        const topRated = data.results.splice(15);

        movieCount.map((index) => {
          requiredData = [
            ...requiredData,
            {
              id: topRated[index]["id"],
              title: topRated[index]["title"],
              overview: topRated[index]["overview"],
              vote: topRated[index]["vote_average"],
              count: topRated[index]["vote_count"],
              poster: topRated[index]["backdrop_path"],
            },
          ];
        });

        setHomeMovie([...requiredData]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTopRated();
  }, [currentPage]);

  if (error)
    return (
      <div className={styles.errorState}>
        A network error was encountered error.message
      </div>
    );
  if (loading) return <div className={styles.loadingState}>Loading...</div>;

  return (
    <>
      {homeMovie.slice(0, itemsPerPage).map((movie) => {
        return (
          <div
            className={styles.cardHomeMovies}
            key={movie.id}
            style={{ backgroundImage: `url(${basePosterUrl + movie.poster})` }}
            data-testid="movie-card"
          >
            <Header />

            <div className={styles.containerWrapper}>
              <div className={styles.title} data-testid="movie-title">
                {movie.title}
              </div>

              <div className={styles.ratingContainer}>
                <div className={styles.ratingIconContainer}>
                  <img src={Star} className={styles.ratingIcon}></img>
                </div>

                <div className={styles.ratingWrapper}>
                  <div>{movie.vote}</div>
                  {"("}
                  <div>{movie.count}</div>
                  {")"}
                </div>
              </div>

              <div className={styles.subTitle} data-testid="movie-overview">
                {movie.overview}
              </div>

              <button>
                <span>
                  <img src={Play} className={styles.ratingIcon}></img>
                </span>
                watch trailer
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default LandingPage;
