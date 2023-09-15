/* eslint-disable react/prop-types */
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiKey } from "../../App";
import styles from "./MovieCard.module.css";
import imdb from "/src/assets/imdb.png";
import Favorite from "/src/assets/Favorite.png";

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

        const date = new Date(data.release_date);

        const utcString = date.toUTCString();

        console.log(utcString);

        requiredData = {
          ...requiredData,
          title: data.title,
          release_date: utcString,
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
      <div className={styles.errorState}>A network error was encountered</div>
    );
  if (loading) return <div className={styles.loadingState}>Loading...</div>;

  return (
    <>
      <div data-testid="movie-card" className={styles.card} id={movieData.id}>
        <div
          className={styles.favoriteBtn}
          onClick={() => handleClick(movieData.id)}
        >
          <img src={Favorite} className={styles.favoriteIcon}></img>
        </div>
        <Link to={`${movieData.imdb_id}`} state={movieData}>
          <img
            src={basePosterUrl + movieData.poster}
            data-testid="movie-poster"
            className={styles.image}
          />

          <div className={styles.firstwrapper}>
            <div>{movieData.country}</div>
            {","}
            <div data-testid="movie-release-date" className={styles.release}>
              {movieData.release_date}
            </div>
          </div>

          <div data-testid="movie-title" className={styles.title}>
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
