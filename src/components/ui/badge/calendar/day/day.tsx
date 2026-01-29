import type { FC } from "react";

import { TextUI } from "../../../text";

import type { TDayUIProps } from "./types";

import { Colors } from "../../../../../utils/colors";

import styles from "./day.module.css";

export const DayUI: FC<TDayUIProps> = ({ text }) => {
  return (
    <TextUI
      as={"span"}
      text={text}
      typography={{
        font: "Unbounded",
        weight: "500",
        size: "14px",
        lineHeight: "20px",
        color: Colors.Nephritis100,
      }}
      className={styles.day}
    />
  );
};
