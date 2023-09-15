/* eslint-disable react/prop-types */
import React from "react";
import styles from "./MovieCardHeader.module.css";
import chevron from "/src/assets/chevron.png";

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
