import React from "react";
import styles from "./Footer.module.css";
import fb from "/src/assets/fb.png";
import twitter from "/src/assets/twitter.png";

const Footer = () => {
  return (
    <>
      <div className={styles.wrapperContainer}>
        <div className={styles.mediaContainer}>
          <img src={fb} className={styles.smIcon}></img>
          <img src={twitter} className={styles.smIcon}></img>
        </div>

        <div className={styles.copyRightText}>made with love❤️ by mubzie</div>
      </div>
    </>
  );
};

export default Footer;
