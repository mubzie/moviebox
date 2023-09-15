import React from "react";
import styles from "./Header.module.css";
import tv from "/public/tv.png";
import Search from "/public/Search.png";
import Menu from "/public/Menu.png";

const Header = () => {
  return (
    <>
      <div className={styles.headerContaner}>
        <div className={styles.homeNav}>
          <span>
            <img src={tv} className={styles.headerIcon}></img>
          </span>
          <span className={styles.navText}>MovieBox</span>
        </div>

        <div className={styles.searchBox}>
          <input type="text" placeholder="search for movies"></input>
          <span className={styles.searchIconSpan}>
            <img src={Search} className={styles.searchIcon}></img>
          </span>
        </div>

        <div className={styles.menuContainer}>
          <span className={styles.menuText}>sign in</span>
          <span>
            <img src={Menu} className={styles.menuIcon}></img>
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
