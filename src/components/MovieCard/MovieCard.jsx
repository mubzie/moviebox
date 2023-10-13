/* eslint-disable react/prop-types */
import React from "react";
import { useState, useEffect } from "react";
import MovieCardHeader from "../movieHeader/MovieCardHeader";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
import imdb from "/src/assets/imdb.png";
import Favorite from "/src/assets/Favorite.png";

const apiKey = import.meta.env.VITE_API_KEY;

const MovieCard = () => {
  const [movieData, setMovieData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleClick = (cardId) => {
    const targetDiv = document.getElementById(cardId);
    targetDiv.style.backgroundColor = "#487520";
  };

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
        console.log(dataResult);

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
        A network error was encountered {error}.
      </div>
    );
  if (loading) return <div className={styles.loadingState}>Loading...</div>;

  return (
    <>
      <div className={styles.containerWrapper}>
        <MovieCardHeader title="Feature Movie" />

        <div className={styles.cardWrapper}>
          {movieData.map((movie) => {
            return (
              <>
                <Link to={`movies/${movie.id}`}>
                  <div
                    className={styles.card}
                    id={movie.id}
                    data-testid="movie-card"
                  >
                    <div
                      className={styles.favoriteBtn}
                      onClick={() => handleClick(movie.id)}
                    >
                      <img src={Favorite} className={styles.favoriteIcon}></img>
                    </div>

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

        <div className={styles.mobileNav}>
          <Button
            type="tertiaryBtn"
            hasIcon={false}
            styleHolder={styles.styleHolder}
          >
            show more
          </Button>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
