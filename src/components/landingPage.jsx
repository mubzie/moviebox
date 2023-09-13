/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { apiKey } from "../App";
import styles from "./landingPage.module.css";

const LandingPage = () => {
  const [homeMovie, setHomeMovie] = useState([]);
  const [movieCount, setmovieCount] = useState([0, 1, 2, 3, 4]);
  const [itemsPerPage] = useState(1);
  const [currentPage] = useState(2);

  const basePosterUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    let requiredData = [];

    async function fetchTopRated() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${currentPage}`
      );
      const data = await response.json();
      console.log(data);

      const topRated = data.results.splice(15);

      console.log(topRated);

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

      //   requiredData = [
      //     ...requiredData,
      //     {
      //       title: topRated.title,
      //       overview: topRated.overview,
      //       vote: topRated.vote_average,
      //       count: topRated.vote_count,
      //       poster: topRated.poster_path,
      //     },
      //     // release_year: data.release_date.split("-")[0],
      //     //   runtime: data.runtime,
      //     //   imdb_id: data.imdb_id,
      //     //   id: data.id,
      //     //   country: data.production_countries.map((arr) => arr.iso_3166_1),
      //     //   genres: data.genres.map((arr) => arr.name).join(", "),
      //     //   status: data.status,
      //   ];
      setHomeMovie([...requiredData]);
    }

    fetchTopRated();
  }, [currentPage]);

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
            <div>search</div>

            <div className={styles.containerWrapper}>
              <div data-testid="movie-title" className={styles.title}>
                {movie.title}
              </div>

              <div className={styles.ratingContainer}>
                <div className={styles.ratingIconContainer}>
                  <img
                    src="../src/assets/Star.png"
                    className={styles.ratingIcon}
                  ></img>
                </div>

                <div className={styles.ratingWrapper}>
                  <div data-testid="movie-vote">{movie.vote}</div>
                  {"/"}
                  <div data-testid="movie-count">{movie.count}</div>
                </div>
              </div>

              <div data-testid="movie-overview" className={styles.subTitle}>
                {movie.overview}
              </div>

              <button>
                <span>
                  <img
                    src="../src/assets/Play.png"
                    className={styles.ratingIcon}
                  ></img>
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
