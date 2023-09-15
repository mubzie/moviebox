/* eslint-disable react/prop-types */
import styles from "./movieCardHeader.module.css";
import chevron from "/public/chevron.png";

const MovieCardHeader = ({ title, subTitle }) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.title}>{title}</div>

      <div className={styles.navContainer}>
        <div className={styles.subTitle}>{subTitle}</div>
        <div className={styles.navIconContainer}>
          <img src={chevron} className={styles.navIcon}></img>
        </div>
      </div>
    </div>
  );
};

export default MovieCardHeader;
