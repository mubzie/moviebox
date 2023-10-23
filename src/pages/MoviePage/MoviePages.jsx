// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import styles from "./MoviePages.module.css";
import tv from "/src/assets/tv.png";
import Home from "/src/assets/Home.png";
import projector from "/src/assets/projector.png";
import show from "/src/assets/show.png";
import Calendar from "/src/assets/Calendar.png";
import Logout from "/src/assets/Logout.png";
import Heart from "/src/assets/Heart.png";
import Share from "/src/assets/Share.png";
import Bookmark from "/src/assets/Bookmark.png";
import Star from "/src/assets/Star.png";
import tickets from "/src/assets/tickets.png";
import List from "/src/assets/List.png";

const apiKey = import.meta.env.VITE_API_KEY;

const MoviePage = () => {
  let { id = "" } = useParams();
  const [movieData, setMovieData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const baseUrl = "https://image.tmdb.org/t/p/original";
  const posterBaseUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    async function fetchMovieData() {
      let requiredData = {};

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
        );
        if (response.status >= 400) {
          throw new Error("server error");
        }
        const data = await response.json();
        console.log(data);

        requiredData = {
          ...requiredData,
          title: data.title,
          release_date: data.release_date,
          runtime: data.runtime,
          overview: data.overview,

          id: data.id,
          country: data.production_countries
            .map((arr) => arr.iso_3166_1)
            .join("-"),
          genres: data.genres.map((arr) => arr.name).join(", "),
          poster: data.poster_path,
          backdrop: data.backdrop_path,
          rating: data.vote_average.toFixed(1),
          count: data.vote_count,
          vote: data.vote_average,
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
      <Header />

      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img
            src={baseUrl + movieData.backdrop}
            className={styles.imageBg}
            alt="movie poster"
          ></img>

          <img
            src={posterBaseUrl + movieData.poster}
            className={styles.imageBgPoster}
            alt="movie poster"
          ></img>
        </div>

        <div className={styles.pageContent}>
          <div className={styles.left}>
            <div className={styles.movieInfo}>
              <div data-testid="movie-title">{movieData.title}</div>
              {" • "}
              <div>{movieData.country}</div>
              {" • "}
              <div data-testid="movie-release-date">
                {movieData.release_date}
              </div>
              {" • "}
              <div data-testid="movie-runtime">{movieData.runtime} mins</div>
              {" • "}
              <div>{movieData.genres}</div>
              {" • "}
              <div className={styles.ratingIconContainer}>
                <img src={Star} className={styles.ratingIcon}></img>
                <div className={styles.ratingWrapper}>
                  <div>{movieData.vote}</div>
                  {"("}
                  <div>{movieData.count}</div>
                  {")"}
                </div>
              </div>
            </div>

            <div className={styles.overview}>
              <div data-testid="movie-overview">{movieData.overview}</div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.optionBtn}>
              <button className={styles.optionIcon}>
                <span>
                  <img src={tickets} className={styles.optIcon}></img>
                </span>
                See Showtimes
              </button>

              <button
                className={styles.optionIcon}
                style={{
                  backgroundColor: "#FFEAEF",
                  color: "#333333",
                  border: "1px solid #BE123C",
                }}
              >
                <span>
                  <img src={List} className={styles.optIcon}></img>
                </span>
                More watch options
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviePage;
