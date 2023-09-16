/* eslint-disable react/prop-types */
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
import imdb from "/src/assets/imdb.png";
import Favorite from "/src/assets/Favorite.png";

const apiKey = import.meta.env.VITE_API_KEY;

const MovieCard = ({ id }) => {
  const [movieData, setMovieData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleClick = (cardId) => {
    const targetDiv = document.getElementById(cardId);
    targetDiv.style.backgroundColor = "#487520";
  };

  const basePosterUrl = "https://image.tmdb.org/t/p/w342";

  useEffect(() => {
    let requiredData = {};

    async function fetchMovieData() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
        );
        const data = await response.json();

        requiredData = {
          ...requiredData,
          title: data.title,
          release_date: data.release_date,
          runtime: data.runtime,
          overview: data.overview,
          imdb_id: data.imdb_id,
          id: data.id,
          country: data.production_countries
            .map((arr) => arr.iso_3166_1)
            .join("-"),
          genres: data.genres.map((arr) => arr.name).join(", "),
          poster: data.poster_path,
          rating: data.vote_average.toFixed(1),
          count: data.vote_count,
        };

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
        A network error was encountered error.message
      </div>
    );
  if (loading) return <div className={styles.loadingState}>Loading...</div>;

  return (
    <>
      <div className={styles.card} id={movieData.id} data-testid="movie-card">
        <div
          className={styles.favoriteBtn}
          onClick={() => handleClick(movieData.id)}
        >
          <img src={Favorite} className={styles.favoriteIcon}></img>
        </div>
        <Link to={`movies/${movieData.id}`}>
          <img
            src={basePosterUrl + movieData.poster}
            alt="movie poster"
            className={styles.image}
            data-testid="movie-poster"
          />

          <div className={styles.firstwrapper}>
            <div>{movieData.country}</div>
            {","}
            <div className={styles.release} data-testid="movie-release-date">
              {movieData.release_date}
            </div>
          </div>

          <div className={styles.title} data-testid="movie-title">
            {movieData.title}
          </div>

          <div className={styles.ratingContainer}>
            <div className={styles.ratingIconContainer}>
              <img src={imdb} className={styles.ratingIcon}></img>
            </div>
            <div>
              {movieData.rating} {"/ 100"}
            </div>
          </div>

          <div className={styles.genres}>{movieData.genres}</div>
        </Link>
      </div>
    </>
  );
};

export default MovieCard;
