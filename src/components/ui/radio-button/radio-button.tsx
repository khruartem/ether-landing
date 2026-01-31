import { type FC } from "react";
import type { TRadioButtonUIProps } from "./types";

import styles from "./radio-button.module.css";
import clsx from "clsx";

export const RadioButtonUI: FC<TRadioButtonUIProps> = ({ text, checked }) => {
  return (
    <label className={styles.radio}>
      <span
        className={clsx(
          styles.radio__circle,
          checked && styles.radio__circle_checked,
        )}
      ></span>
      {text}
    </label>
  );
};
