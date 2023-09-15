/* eslint-disable react/prop-types */
import React from "react";
import { useState, useEffect } from "react";
import { apiKey } from "../../App";
import Header from "../header/Header";
import styles from "./LandingPage.module.css";
import Star from "/src/assets/Star.png";
import Play from "/src/assets/Play.png";
// import Star from '/public/Star.png'

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
        // console.log(data);

        const topRated = data.results.splice(15);

        // console.log(topRated);

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
      <div className={styles.errorState}>A network error was encountered</div>
    );
  if (loading) return <div className={styles.loadingState}>Loading...</div>;

  return (
    <>
      {homeMovie.slice(0, itemsPerPage).map((movie) => {
        return (
          <div
            className={styles.cardHomeMovies}
            data-testid="movie-card"
            key={movie.id}
            style={{ backgroundImage: `url(${basePosterUrl + movie.poster})` }}
          >
            <Header />

            <div className={styles.containerWrapper}>
              <div data-testid="movie-title" className={styles.title}>
                {movie.title}
              </div>

              <div className={styles.ratingContainer}>
                <div className={styles.ratingIconContainer}>
                  <img src={Star} className={styles.ratingIcon}></img>
                </div>

                <div className={styles.ratingWrapper}>
                  <div data-testid="movie-vote">{movie.vote}</div>
                  {"("}
                  <div data-testid="movie-count">{movie.count}</div>
                  {")"}
                </div>
              </div>

              <div data-testid="movie-overview" className={styles.subTitle}>
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