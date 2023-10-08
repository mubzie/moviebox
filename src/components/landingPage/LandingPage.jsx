/* eslint-disable react/prop-types */
import React from "react";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Button from "../Button/Button";
import styles from "./LandingPage.module.css";
import Star from "/src/assets/Star.png";
import Play from "/src/assets/Play.png";
// import Star from '/public/Star.png'

const apiKey = import.meta.env.VITE_API_KEY;

const LandingPage = () => {
  const [trendingMovie, setTrendingMovie] = useState([]);
  const [movieCount, setmovieCount] = useState([0, 1, 2, 3, 4]);
  const [itemsPerPage] = useState(1);
  const [currentPage] = useState(2);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const basePosterUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    let requiredData = [];

    async function fetchTrendingMovies() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=en-US&page=${currentPage}`
        );
        const data = await response.json();

        const trendMovies = data.results.splice(15);

        movieCount.map((index) => {
          requiredData = [
            ...requiredData,
            {
              id: trendMovies[index]["id"],
              title: trendMovies[index]["title"],
              overview: trendMovies[index]["overview"],
              vote: trendMovies[index]["vote_average"],
              count: trendMovies[index]["vote_count"],
              poster: trendMovies[index]["backdrop_path"],
            },
          ];
        });

        setTrendingMovie([...requiredData]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTrendingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      {trendingMovie.slice(0, itemsPerPage).map((movie) => {
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

              <Button
                type="primaryBtn"
                hasIcon={true}
                icon={Play}
                iconPosition="before"
                iconSize="medium"
              >
                watch trailer
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default LandingPage;
