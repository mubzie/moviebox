/* eslint-disable react/prop-types */
import tv from "/src/assets/tv.png";
import styles from "./Logo.module.css";

const Logo = ({ children }) => {
  return (
    <div className={styles.container}>
      <span>
        <img src={tv} className={styles.logoIcon}></img>
      </span>
      <div className={styles.logoText}>{children}</div>
    </div>
  );
};

export default Logo;
