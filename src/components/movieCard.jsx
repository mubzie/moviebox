/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { apiKey } from "../App";

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
      console.log(data);

      requiredData = {
        ...requiredData,
        title: data.title,
        release_year: data.release_date.split("-")[0],
        runtime: data.runtime,
        overview: data.overview,
        imdb_id: data.imdb_id,
        id: data.id,
        country: data.production_countries.map((arr) => arr.iso_3166_1),
        genres: data.genres.map((arr) => arr.name),
        poster: data.poster_path,
        status: data.status,
        rating: data.vote_average,
        count: data.vote_count,
      };

      setMovieData(requiredData);
    }

    fetchMovieData();
  }, []);

  return (
    <>
      <ul>
        <li>
          <p>Titie: {movieData.title}</p>
          <p>vote_average: {movieData.vote_average}</p>
        </li>
      </ul>
      <img src={basePosterUrl + movieData.poster} />
    </>
  );
};

export default MovieCard;
