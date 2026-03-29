import { forwardRef } from "react";
import clsx from "clsx";

import type { TAdvantagesGroupUIProps } from "./types";

import styles from "./advantages-group.module.css";

export const AdvantagesGroupUI = forwardRef<
  HTMLUListElement,
  TAdvantagesGroupUIProps
>(({ group, children }, ref) => {
  return (
    <ul
      id={group.id}
      className={clsx(
        styles.advantages__group,
        group.id === "events" && styles.advantages__group_colored,
      )}
      ref={ref}
    >
      {children}
    </ul>
  );
});
