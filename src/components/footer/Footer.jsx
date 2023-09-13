import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.footerWrapperContainer}>
        <div className={styles.socialMediaContainer}>
          <img src="./src/assets/Vector.png" className={styles.smIcon}></img>
          <img
            src="./src/assets/fa-brands_instagram.png"
            className={styles.smIcon}
          ></img>
          <img
            src="./src/assets/fa-brands_twitter.png"
            className={styles.smIcon}
          ></img>
          <img
            src="./src/assets/fa-brands_youtube.png"
            className={styles.smIcon}
          ></img>
        </div>

        <ul className={styles.footerListItems}>
          <li className="listItems">condition of use</li>
          <li className="listItems">privacy & policy</li>
          <li className="listItems">press room</li>
        </ul>

        <div className={styles.copyRightText}>
          &#169; 2023 MovieBox by Mubarak Rabiu
        </div>
      </div>
    </>
  );
};

export default Footer;
