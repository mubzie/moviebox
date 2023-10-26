/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./MoviePages.module.css";

import Star from "/src/assets/Star.png";

const apiKey = import.meta.env.VITE_API_KEY;

const MoviePage = () => {
  let { id } = useParams();
  const [movieData, setMovieData] = useState([]);
  const [castData, setCastData] = useState([]);
  const [crewData, setCrewData] = useState([]);
  const [videoData, setVideoData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const baseUrl = "https://image.tmdb.org/t/p/original";
  const castBaseUrl = "https://image.tmdb.org/t/p/original";
  const videoUrl = `https://www.youtube.com/embed/${videoData}`;

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
          vote: data.vote_average.toFixed(1),
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

  useEffect(() => {
    async function fetchCastData() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`
        );
        if (response.status >= 400) {
          throw new Error("server error");
        }
        const data = await response.json();
        const casts = data.cast.slice(0, 5);

        const requiredData = casts.map((cast) => ({
          name: cast.name,
          profile: cast.profile_path,
          character: cast.character,
        }));

        setCastData(requiredData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCastData();
  }, []);

  useEffect(() => {
    async function fetchCrewData() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`
        );
        if (response.status >= 400) {
          throw new Error("server error");
        }
        const data = await response.json();
        const crews = data.crew.slice(0, 10);

        const requiredData = crews.map((crew) => ({
          name: crew.name,
          job: crew.job,
        }));

        setCrewData(requiredData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCrewData();
  }, []);

  useEffect(() => {
    async function fetchVideoData() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`
        );
        if (response.status >= 400) {
          throw new Error("server error");
        }
        const data = await response.json();
        const videos = data.results.slice(0, 1);

        const requiredData = videos.map((video) => video.key);

        setVideoData(requiredData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchVideoData();
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
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img
            src={baseUrl + movieData.backdrop}
            className={styles.imageBg}
            alt="movie poster"
          ></img>

          <iframe
            width="560"
            height="100"
            src={videoUrl}
            allowfullscreen
            className={styles.videoFrame}
          ></iframe>
        </div>

        <div className={styles.pageContent}>
          <div className={styles.left}>
            <div className={styles.movieInfo}>
              <div data-testid="movie-title" className={styles.title}>
                {movieData.title}
              </div>
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

            <div className={styles.crewContainer}>
              <h4>Crew</h4>
              <div className={styles.mainConainerCrew} key={movieData.id}>
                {crewData.map((crew) => {
                  return (
                    <div className={styles.infoContainer} key={movieData.id}>
                      <div className={styles.infoProfile}>
                        <span>{crew.job}: </span>
                        <span>{crew.name}</span>
                        {", "}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.castContainer}>
              <h4>Top Cast</h4>
              <div className={styles.mainConainerCast} key={movieData.id}>
                {castData.map((cast) => {
                  return (
                    <div className={styles.infoContainer} key={movieData.id}>
                      <img
                        src={castBaseUrl + cast.profile}
                        className={styles.imgProfile}
                      ></img>

                      <div className={styles.infoProfile}>
                        <div>{cast.name}</div>
                        <div>( {cast.character} )</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviePage;
