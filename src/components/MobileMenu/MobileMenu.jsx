import Button from "../Button/Button";
import styles from "./MobileMenu.module.css";

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <>
      <div className={styles.container}>
        <Button type="secondaryBtn" hasIcon={false}>
          log in
        </Button>

        <Button type="primaryBtn" hasIcon={false}>
          register
        </Button>
      </div>
    </>
  );
};

export default MobileMenu;
