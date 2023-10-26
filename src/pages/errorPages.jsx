// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/ErrorPages.module.css";

const ErrorPage = () => {
  return (
    <div className={styles.errorState}>
      <h1>Oh okay, but this route does not exist!</h1>
      <Link to="/">
        You can go back to the home page by clicking on this text though!
      </Link>
    </div>
  );
};

export default ErrorPage;
