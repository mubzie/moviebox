// eslint-disable-next-line no-unused-vars
import React from "react";
import { useParams, useLocation } from "react-router-dom";
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

const MoviePage = () => {
  // eslint-disable-next-line no-unused-vars
  let { id = "" } = useParams();
  const location = useLocation();
  const movieData = location.state;

  const baseUrl = "https://image.tmdb.org/t/p/original";

  // console.log(imdb_id);
  // console.log(movieData);

  return (
    <>
      <div className={styles.container}>
        <aside>
          <div className={styles.asideHeader}>
            {" "}
            <img src={tv} className={styles.asideIcon}></img> MovieBox
          </div>
          <ul className={styles.ulPages}>
            <li>
              <img src={Home} className={styles.pages}></img>
              Home
            </li>
            <li style={{ backgroundColor: "#FFEAEF", color: "#BE123C" }}>
              <img src={projector} className={styles.pages}></img>
              Movies
            </li>
            <li>
              <img src={show} className={styles.pages}></img>
              TV series
            </li>
            <li>
              <img src={Calendar} className={styles.pages}></img>
              Upcomin
            </li>
          </ul>

          <div className={styles.asideText}>
            <div className={styles.infoText}>
              Play movie quizes and earn free tickets
            </div>
            <p>50k people are playing now</p>
            <button className={styles.asideBtn}>start playing</button>
          </div>

          <ul className={styles.ulPages} style={{ marginBottom: "56px" }}>
            <li>
              <img src={Logout} className={styles.pages}></img>
              Log out{" "}
            </li>
          </ul>
        </aside>

        <main>
          <div className={styles.imgBg}>
            <img
              src={baseUrl + movieData?.poster}
              className={styles.asideImg}
              data-testid="movie-poster"
              alt="movie poster"
            ></img>
          </div>

          <div className={styles.containerPages}>
            <div className={styles.leftSide}>
              <div className={styles.heading}>
                <div data-testid="movie-title">{movieData?.title}</div>
                {" • "}
                <div data-testid="movie-release-date">
                  {movieData?.release_date}
                </div>
                {" • "}
                <div data-testid="movie-runtime">{movieData?.runtime}mins</div>
                {" • "}
                <div>{movieData?.genres}</div>
              </div>

              <div className={styles.subHeading}>
                <div data-testid="movie-overview">{movieData?.overview}</div>
              </div>
            </div>

            <div className={styles.rightSide}>
              <div className={styles.rightSideIcon}>
                <img src={Heart} className={styles.dIcon}></img>
                <img src={Share} className={styles.dIcon}></img>
                <img src={Bookmark} className={styles.dIcon}></img>

                <div className={styles.ratingIconContainer}>
                  <img src={Star} className={styles.ratingIcon}></img>
                  <div className={styles.ratingWrapper}>
                    <div data-testid="movie-vote">{movieData?.vote}</div>
                    {"|"}
                    <div data-testid="movie-count">{movieData?.count}</div>
                  </div>
                </div>
              </div>

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
        </main>
      </div>
    </>
  );
};

export default MoviePage;
