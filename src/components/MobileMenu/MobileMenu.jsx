/* eslint-disable react/prop-types */
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import closeBtn from "../../assets/close.png";
import styles from "./MobileMenu.module.css";

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
          <Button type="secondaryBtn" hasIcon={false}>
            log in
          </Button>

          <Button type="primaryBtn" hasIcon={false}>
            register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
