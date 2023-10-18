/* eslint-disable react/prop-types */
import React from "react";
import Button from "../Button/Button";
import styles from "./MovieCardHeader.module.css";
import chevron from "/src/assets/chevron.png";

const MovieCardHeader = ({ title }) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.title}>{title}</div>

      <Button
        type="tertiaryBtn"
        hasIcon={true}
        icon={chevron}
        iconPosition="after"
        iconSize="medium"
        styleHolder={styles.moreBtn}
      >
        see more
      </Button>
    </div>
  );
};

export default MovieCardHeader;
