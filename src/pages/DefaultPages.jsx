/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import styles from "./DefaultPages.module.css";

const DefaultPages = () => {
  return (
    <div className={styles.container}>
      <p>
        My bad! This is just a practice project, and I was planning to add
        authentication and some other cool stuff, but, you know, life happens
        :). I might get back to it at some point, or maybe not. We'll see!.
      </p>

      <Link to="/">
        <Button
          type="primaryBtn"
          hasIcon={false}
          styleHolder={styles.btnContainer}
        >
          go back to home page
        </Button>
      </Link>
    </div>
  );
};

export default DefaultPages;
