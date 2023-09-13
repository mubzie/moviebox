/* eslint-disable react/prop-types */
import styles from "./movieCardHeader.module.css";

const MovieCardHeader = ({ title, subTitle }) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.title}>{title}</div>

      <div className={styles.navContainer}>
        <div className={styles.subTitle}>{subTitle}</div>
        <div className={styles.navIconContainer}>
          <img
            src="../src/assets/chevron-right.png"
            className={styles.navIcon}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default MovieCardHeader;
