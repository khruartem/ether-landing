import type { FC } from "react";
import clsx from "clsx";

import { TextUI } from "../text";

import type { TInputUIProps } from "./types";

import { Typography } from "../../../utils/typography";
import { Colors } from "../../../utils/colors";

import styles from "./input.module.css";

export const InputUI: FC<TInputUIProps> = ({ placeholder, className }) => {
  return (
    <div className={clsx(styles.input, className && className)}>
      <TextUI typography={Typography.Text_400_16} color={Colors.Light20}>
        {placeholder}
      </TextUI>
    </div>
  );
};
