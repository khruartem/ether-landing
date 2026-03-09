import type { FC } from "react";
import clsx from "clsx";

import { TextUI } from "../text";

import type { TAdvantagesTabUIProps } from "./types";

import { Typography } from "../../../utils/typography";
import { Colors } from "../../../utils/colors";

import styles from "./advantages-tab.module.css";

export const AdvantagesTabUI: FC<TAdvantagesTabUIProps> = ({
  tab,
  current,
  onChange,
}) => {
  return (
    <li
      className={clsx(
        styles.advantages__tab,
        current && styles.advantages__tab_current,
      )}
      onClick={onChange}
    >
      <TextUI
        as={"span"}
        typography={Typography.Title_500_28}
        color={current ? Colors.Light100 : Colors.Light20}
      >
        {tab}
      </TextUI>
    </li>
  );
};
