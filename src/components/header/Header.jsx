import React from "react";
import styles from "./Header.module.css";
import tv from "/src/assets/tv.png";
import Search from "/src/assets/Search.png";
import Menu from "/src/assets/Menu.png";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <>
      <Logo>MovieBox</Logo>
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
