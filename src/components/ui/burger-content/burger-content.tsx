import type { FC } from "react";
import clsx from "clsx";

import type { TBurgerContentUIProps } from "./types";

import styles from "./burger-content.module.css";

export const BurgerContentUI: FC<TBurgerContentUIProps> = ({
  opened,
  children,
}) => {
  return (
    <div
      className={clsx(
        styles.burger__content,
        opened ? styles.burger__content_opened : styles.burger__content_closed,
      )}
    >
      {children}
    </div>
  );
};
