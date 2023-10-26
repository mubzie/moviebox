// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../button/button";
import styles from "./MovieCardHeader.module.css";
import chevron from "/src/assets/chevron.png";

const MovieCardHeader = ({ title }) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.title}>{title}</div>

      <Link to="/default">
        <Button
          type="tertiaryBtn"
          hasIcon={true}
          icon={chevron}
          iconPosition="after"
          iconSize="medium"
          styleHolder={styles.moreBtn}
        >
          show more
        </Button>
      </Link>
    </div>
  );
};

MovieCardHeader.propTypes = {
  title: PropTypes.string,
};

export default MovieCardHeader;
