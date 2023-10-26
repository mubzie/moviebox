/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import tv from "/src/assets/tv.png";
import styles from "../styles/Logo.module.css";

const Logo = ({ children, logoText }) => {
  return (
    <div className={styles.container}>
      <span className={styles.iconWrapper}>
        <img src={tv} className={styles.logoIcon}></img>
      </span>
      <div className={logoText}>{children}</div>
    </div>
  );
};

Logo.propTypes = {
  children: PropTypes.string,
  logoText: PropTypes.string,
};

export default Logo;
