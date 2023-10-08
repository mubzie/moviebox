import React from "react";
import styles from "./Header.module.css";
import tv from "/src/assets/tv.png";
import Search from "/src/assets/Search.png";
import Menu from "/src/assets/Menu.png";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

const Header = () => {
  return (
    <>
      <div className={styles.headerContaner}>
        <Logo>MovieBox</Logo>

        <div className={styles.btnContainer}>
          <Button type="secondaryBtn" hasIcon={false}>
            log in
          </Button>

          <Button type="primaryBtn" hasIcon={false}>
            register
          </Button>
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
