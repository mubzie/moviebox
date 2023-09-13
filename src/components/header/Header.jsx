import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.headerContaner}>
        <div className={styles.homeNav}>
          <span>
            <img src="../src/assets/tv.png" className={styles.headerIcon}></img>
          </span>
          <span className={styles.navText}>MovieBox</span>
        </div>

        <div className={styles.searchBox}>
          <input type="text" placeholder="search for movies"></input>
          <span className={styles.searchIconSpan}>
            <img
              src="../src/assets/Search.png"
              className={styles.searchIcon}
            ></img>
          </span>
        </div>

        <div className={styles.menuContainer}>
          <span className={styles.menuText}>sign in</span>
          <span>
            <img src="../src/assets/Menu.png" className={styles.menuIcon}></img>
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
