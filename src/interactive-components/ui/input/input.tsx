import type { FC } from "react";
import clsx from "clsx";

import { InputMask } from "@react-input/mask";

import type { TInputUIProps } from "./types";

import styles from "./input.module.css";

export const InputUI: FC<TInputUIProps> = ({ withMask, className, ...props }) => {
  return (
    <label className={styles.label}>
      {withMask ? (
        <InputMask
          className={clsx(styles.input, className && className)}
          {...props}
        />
      ) : (
        <input
          className={clsx(styles.input, className && className)}
          {...props}
        />
      )}
    </label>
  );
};
