/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Button from "./button";
import closeBtn from "../assets/close.png";
import styles from "../styles/MobileMenu.module.css";

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <div className={styles.header}>
          <Logo logoText={styles.logoText}>MovieBox</Logo>

          <span className={styles.iconWrapper} onClick={onClose}>
            <img src={closeBtn} className={styles.closeIcon}></img>
          </span>
        </div>

        <div className={styles.btnNavMobile}>
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
      </div>
    </div>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default MobileMenu;
