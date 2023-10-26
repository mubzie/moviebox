/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({
  type,
  children,
  onClick,
  hasIcon,
  icon,
  iconSize,
  styleHolder,
  iconPosition,
}) => {
  const iconElem = hasIcon ? (
    <span className={styles[iconSize]}>
      <img src={icon} className={styles[iconSize]}></img>
    </span>
  ) : null;

  return (
    <div className={styleHolder}>
      <button type={type} className={styles[type]} onClick={onClick}>
        {iconPosition === "before" && iconElem}
        {children}
        {iconPosition === "after" && iconElem}
      </button>
    </div>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func,
  hasIcon: PropTypes.bool,
  icon: PropTypes.string,
  iconSize: PropTypes.string,
  styleHolder: PropTypes.string,
  iconPosition: PropTypes.string,
};

export default Button;
