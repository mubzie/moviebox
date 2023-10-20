import PropTypes from "prop-types";
import tv from "/src/assets/tv.png";
import styles from "./Logo.module.css";

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
  children: PropTypes.element,
  logoText: PropTypes.string,
};

export default Logo;
