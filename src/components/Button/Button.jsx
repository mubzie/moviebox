/* eslint-disable react/prop-types */
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

export default Button;
