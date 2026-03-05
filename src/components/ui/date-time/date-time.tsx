import type { FC } from "react";
import { TextUI } from "../text";

import styles from "./date-time.module.css";
import { Colors } from "../../../utils/colors";
import type { TDateTimeUIProps } from "./types";
import { Typography } from "../../../utils/typography";

export const DateTimeUI: FC<TDateTimeUIProps> = ({ date, time }) => {
  return (
    <div className={styles["date-time"]}>
      <TextUI
        as={"span"}
        typography={Typography.Text_400_14}
        color={Colors.Dark80}
      >
        {date}
      </TextUI>
      <TextUI
        as={"span"}
        typography={Typography.Text_400_14}
        color={Colors.Dark80}
        className={styles["bordered"]}
      >
        {time}
      </TextUI>
    </div>
  );
};
