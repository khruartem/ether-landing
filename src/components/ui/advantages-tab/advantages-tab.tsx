import { forwardRef } from "react";
import clsx from "clsx";

import { TextUI } from "../text";

import type { TAdvantagesTabUIProps } from "./types";

import { Typography } from "../../../utils/typography";
import { Colors } from "../../../utils/colors";

import { useTypography } from "./useTypography";
import { useStyle } from "./useStyle";

import styles from "./advantages-tab.module.css";

export const AdvantagesTabUI = forwardRef<HTMLLIElement, TAdvantagesTabUIProps>(({
  tab,
  current,
  onChange,
}, ref) => {
  const tabTypography = useTypography();
  const tabStyle = useStyle();

  return (
    <li
      className={clsx(
        styles.advantages__tab,
        current && styles.advantages__tab_current,
      )}
      onClick={onChange}
      style={tabStyle}
      ref={ref}
    >
      <TextUI
        as={"span"}
        typography={Typography[tabTypography]}
        color={current ? Colors.Light100 : Colors.Light20}
      >
        {tab}
      </TextUI>
    </li>
  );
});
