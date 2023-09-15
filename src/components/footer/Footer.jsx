import styles from "./Footer.module.css";
import instagram from "/public/instagram.png";
import fb from "/public/fb.png";
import yt from "/public/yt.png";
import twitter from "/public/twitter.png";

const Footer = () => {
  return (
    <>
      <div className={styles.footerWrapperContainer}>
        <div className={styles.socialMediaContainer}>
          <img src={fb} className={styles.smIcon}></img>
          <img src={instagram} className={styles.smIcon}></img>
          <img src={twitter} className={styles.smIcon}></img>
          <img src={yt} className={styles.smIcon}></img>
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
