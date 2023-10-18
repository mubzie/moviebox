import React from "react";
import { Link } from "react-router-dom";
import styles from "./ErrorPages.module.css";

const ErrorPage = () => {
  return (
    <div className={styles.errorState}>
      <h1>Oh okay, but this route does not exist!</h1>
      <Link to="/">
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
};

export default ErrorPage;
