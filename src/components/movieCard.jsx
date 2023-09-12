/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { apiKey } from "../App";
import styles from "./movieCard.module.css";

const MovieCard = ({ id }) => {
  const [movieData, setMovieData] = useState([]);

  const basePosterUrl = "https://image.tmdb.org/t/p/w342";

  useEffect(() => {
    let requiredData = {};

    async function fetchMovieData() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
      );
      const data = await response.json();

      requiredData = {
        ...requiredData,
        title: data.title,
        release_year: data.release_date.split("-")[0],
        runtime: data.runtime,
        overview: data.overview,
        imdb_id: data.imdb_id,
        id: data.id,
        country: data.production_countries.map((arr) => arr.iso_3166_1),
        genres: data.genres.map((arr) => arr.name).join(", "),
        poster: data.poster_path,
        status: data.status,
        rating: data.vote_average.toFixed(1),
        count: data.vote_count,
      };

      setMovieData(requiredData);
    }

    fetchMovieData();
  }, []);

  return (
    <>
      <div data-testid="movie-card" className={styles.card}>
        <img
          src={basePosterUrl + movieData.poster}
          data-testid="movie-poster"
          className={styles.image}
        />

        <div className={styles.firstwrapper}>
          <div data-testid="movie-production-country">{movieData.country}</div>
          {","}
          <div data-testid="movie-release-date" className={styles.release}>
            {movieData.release_year}
          </div>
        </div>

        <div data-testid="movie-title" className={styles.title}>
          {movieData.title}
        </div>

        <div className={styles.ratingContainer}>
          <div className={styles.ratingIconContainer}>
            <img
              src="../src/assets/imdb-icon.png"
              className={styles.ratingIcon}
            ></img>
          </div>
          <div data-testid="movie-rating">
            {movieData.rating} {"/ 100"}
          </div>
        </div>

        <div data-testid="movie-genre" className={styles.genres}>
          {movieData.genres}
        </div>
      </div>
    </>
  );
};

export default MovieCard;
