/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";
import Logo from "./Logo.jsx";
import Menu from "../assets/Menu.png";
import Button from "./button";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <div className={styles.headerContainer}>
        <Logo logoText={styles.logoText}>MovieBox</Logo>

        <div className={styles.btnNavDesktop}>
          <Link to="/default">
            <Button type="secondaryBtn" hasIcon={false}>
              log in
            </Button>
          </Link>

          <Link to="/default">
            <Button type="primaryBtn" hasIcon={false}>
              register
            </Button>
          </Link>
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
