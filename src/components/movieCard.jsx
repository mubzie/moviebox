// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MovieCardHeader from "./movieCardHeader";
import Button from "./button";
import styles from "../styles/MovieCard.module.css";
import imdb from "/src/assets/imdb.png";

const apiKey = import.meta.env.VITE_API_KEY;

const MovieCard = () => {
  const [movieData, setMovieData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const basePosterUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    async function fetchMovieData() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&origin_country=GB`
        );
        if (response.status >= 400) {
          throw new Error("server error");
        }
        const data = await response.json();
        const dataResult = data.results;

        const requiredData = dataResult.map((result) => ({
          title: result.title,
          language: result.original_language.toUpperCase(),
          release_date: result.release_date,
          id: result.id,
          poster: result.poster_path,
          rating: result.vote_average,
        }));

        setMovieData(requiredData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMovieData();
  }, []);

  if (error)
    return (
      <div className={styles.errorState}>
        A network error was encountered. {error}.
      </div>
    );
  if (loading)
    return (
      <div className={styles.loadingState}>
        <div className={styles.loadingSpinner}></div>
        <div className={styles.loadingText}>Loading...</div>
      </div>
    );

  return (
    <>
      <div className={styles.containerWrapper}>
        <MovieCardHeader title="Trending Movies" />

        <div className={styles.cardWrapper}>
          {movieData.map((movie) => {
            return (
              <>
                <Link to={`movies/${movie.id}`}>
                  <div
                    key={movie.id}
                    className={styles.card}
                    id={movie.id}
                    data-testid="movie-card"
                  >
                    <img
                      src={basePosterUrl + movie.poster}
                      alt="movie poster"
                      className={styles.image}
                      data-testid="movie-poster"
                    />

                    <div className={styles.firstwrapper}>
                      <div>{movie.language}</div>
                      {","}
                      <div
                        className={styles.release}
                        data-testid="movie-release-date"
                      >
                        {movie.release_date}
                      </div>
                    </div>

                    <div className={styles.title} data-testid="movie-title">
                      {movie.title}
                    </div>

                    <div className={styles.ratingContainer}>
                      <div className={styles.ratingIconContainer}>
                        <img src={imdb} className={styles.ratingIcon}></img>
                      </div>
                      <div>
                        {movie.rating} {"/ 10"}
                      </div>
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
        </div>

        <Link to="/default">
          <div className={styles.mobileNav}>
            <Button
              type="tertiaryBtn"
              hasIcon={false}
              styleHolder={styles.styleHolder}
            >
              show more
            </Button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MovieCard;
