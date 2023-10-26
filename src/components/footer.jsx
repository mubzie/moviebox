// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "../styles/Footer.module.css";
import github from "/src/assets/github.png";
import twitter from "/src/assets/twitter.png";

const Footer = () => {
  return (
    <>
      <div className={styles.wrapperContainer}>
        <div className={styles.mediaContainer}>
          <a href="https://github.com/mubzie">
            <img src={github} className={styles.githubIcon}></img>
          </a>
          <a href="https://twitter.com/mubzie_">
            <img src={twitter} className={styles.smIcon}></img>
          </a>
        </div>

        <div className={styles.copyRightText}>made with love❤️ by mubzie</div>
      </div>
    </>
  );
};

export default Footer;
