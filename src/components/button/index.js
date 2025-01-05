import styles from "./button.module.css";
import cx from "classnames";

export default function Button({ text, isDisabled }) {
  return (
    <button
      className={cx({
        [styles.disabledButton]: isDisabled,
        [styles.button]: true,
      })}
    >
      {text}
    </button>
  );
}
