import { useParams, useLocation, Link } from "react-router-dom";
import styles from "./MoviePages.module.css";

const MoviePage = () => {
  let { imdb_id = "" } = useParams();
  const location = useLocation();
  const movieData = location.state;

  const baseUrl = "https://image.tmdb.org/t/p/original";
  const backgroundImage = `${baseUrl + movieData?.poster}`;

  console.log(imdb_id);
  console.log(movieData);

  return (
    <>
      <div className={styles.container}>
        <aside>
          <div className={styles.asideHeader}>
            {" "}
            <img
              src="../src/assets/tv.png"
              className={styles.asideIcon}
            ></img>{" "}
            MovieBox
          </div>
          <ul className={styles.ulPages}>
            <li>
              <img src="../src/assets/Home.png" className={styles.pages}></img>
              Home
            </li>
            <li style={{ backgroundColor: "#FFEAEF", color: "#BE123C" }}>
              <img
                src="../src/assets/Movie Projector.png"
                className={styles.pages}
              ></img>
              Movies
            </li>
            <li>
              <img
                src="../src/assets/TV Show.png"
                className={styles.pages}
              ></img>
              TV series
            </li>
            <li>
              <img
                src="../src/assets/Calendar.png"
                className={styles.pages}
              ></img>
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
              <img
                src="../src/assets/Logout.png"
                className={styles.pages}
              ></img>
              Log out{" "}
            </li>
          </ul>
        </aside>

        <main>
          <div className={styles.imgBg}>
            <img
              src={baseUrl + movieData?.poster}
              className={styles.asideImg}
            ></img>
          </div>

          <div className={styles.containerPages}>
            <div className={styles.leftSide}>
              <div className={styles.heading}>
                <div>{movieData?.title}</div>
                {" • "}
                <div>{movieData?.release_year}</div>
                {" • "}
                <div>{movieData?.runtime}mins</div>
                {" • "}
                <div>{movieData?.genres}</div>
              </div>

              <div className={styles.subHeading}>
                <div>{movieData?.overview}</div>
              </div>
            </div>

            <div className={styles.rightSide}>
              <div className={styles.rightSideIcon}>
                <img
                  src="../src/assets/Heart.png"
                  className={styles.dIcon}
                ></img>
                <img
                  src="../src/assets/Share.png"
                  className={styles.dIcon}
                ></img>
                <img
                  src="../src/assets/Bookmark.png"
                  className={styles.dIcon}
                ></img>

                <div className={styles.ratingIconContainer}>
                  <img
                    src="../src/assets/Star.png"
                    className={styles.ratingIcon}
                  ></img>
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
                    <img
                      src="../src/assets/Two Tickets.png"
                      className={styles.optIcon}
                    ></img>
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
                    <img
                      src="../src/assets/List.png"
                      className={styles.optIcon}
                    ></img>
                  </span>
                  More watca options
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
