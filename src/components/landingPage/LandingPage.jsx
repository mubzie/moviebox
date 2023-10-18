/* eslint-disable react/prop-types */
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import MobileNavDrawer from "../MobileMenu/MobileMenu";
import MovieCard from "../MovieCard/MovieCard";
import Footer from "../Footer/Footer";
import Button from "../Button/Button";
import styles from "./LandingPage.module.css";
import Star from "/src/assets/Star.png";
import Play from "/src/assets/Play.png";

const apiKey = import.meta.env.VITE_API_KEY;

const LandingPage = () => {
  const [trendingMovie, setTrendingMovie] = useState([]);
  const [movieCount] = useState([0, 1, 2]);
  const [itemsPerPage] = useState(1);
  const [currentPage] = useState(2);
  const [error, setError] = useState(null);
  const [isloading, setIsLoading] = useState(true);

  const basePosterUrl = "https://image.tmdb.org/t/p/original";

  // useEffect(() => {
  //   let requiredData = [];

  //   async function fetchTrendingMovies() {
  //     try {
  //       const response = await fetch(
  //         `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=en-US&page=${currentPage}`
  //       );
  //       if (response.status >= 400) {
  //         throw new Error("server error");
  //       }
  //       const data = await response.json();

  //       const trendMovies = data.results.splice(15);
  //       console.log(trendMovies);

  //       movieCount.map((index) => {
  //         requiredData = [
  //           ...requiredData,
  //           {
  //             id: trendMovies[index]["id"],
  //             title: trendMovies[index]["title"],
  //             overview: trendMovies[index]["overview"],
  //             vote: trendMovies[index]["vote_average"],
  //             count: trendMovies[index]["vote_count"],
  //             poster: trendMovies[index]["backdrop_path"],
  //           },
  //         ];
  //       });

  //       setTrendingMovie([...requiredData]);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

  //   fetchTrendingMovies();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [currentPage]);

  if (error)
    return (
      <div className={styles.errorState}>
        A network error was encountered. {error}.
      </div>
    );

  return (
    <>
      <Header />
      {trendingMovie.slice(0, itemsPerPage).map((movie) => {
        return (
          <div
            className={styles.cardTrendiingMovies}
            key={movie.id}
            style={{ backgroundImage: `url(${basePosterUrl + movie.poster})` }}
            data-testid="movie-card"
          >
            {/* <MobileNavDrawer /> */}

            {isloading && <div className={styles.loadingState}>Loading...</div>}

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

              <Link to={`movies/${movie.id}`}>
                <Button
                  type="primaryBtn"
                  hasIcon={true}
                  icon={Play}
                  iconPosition="before"
                  iconSize="medium"
                >
                  show more details
                </Button>
              </Link>
            </div>
          </div>
        );
      })}

      {/* <MovieCard /> */}

      {!isloading && <Footer />}
    </>
  );
};

export default LandingPage;
