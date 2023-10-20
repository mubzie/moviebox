/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import Menu from "../../assets/Menu.png";
import Button from "../Button/Button";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <div className={styles.headerContainer}>
        <Logo logoText={styles.logoText}>MovieBox</Logo>

        <div className={styles.btnNavDesktop}>
          <Button type="secondaryBtn" hasIcon={false}>
            log in
          </Button>

          <Button type="primaryBtn" hasIcon={false}>
            register
          </Button>
        </div>

        <div className={styles.btnNavMobile}>
          <span
            className={styles.iconWrapper}
            onClick={() => setShowMobileMenu(true)}
          >
            <img src={Menu} className={styles.menuIcon}></img>
          </span>
        </div>

        <MobileMenu
          isOpen={showMobileMenu}
          onClose={() => setShowMobileMenu(false)}
        />
      </div>
    </>
  );
};

export default Header;
