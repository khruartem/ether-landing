import type { FC } from "react";

import { TitleUI } from "../title/title";

import { Colors } from "../../../utils/colors";
import { Typography } from "../../../utils/typography";

import styles from "./heading.module.css";

export const HeadingUI: FC = () => {
  return (
    <h1 className={styles.heading}>
      <TitleUI
        as={"span"}
        text={"Будьте"}
        typography={Typography.Title_900_100}
        color={Colors.Navy}
      />
      <TitleUI
        as={"span"}
        text={"в Эфире"}
        typography={Typography.Title_900_100}
        color={Colors.Navy}
        emphasized="Эфире"
      />
    </h1>
  );
};
