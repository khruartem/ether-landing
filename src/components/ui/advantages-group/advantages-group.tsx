import { forwardRef } from "react";

import type { TAdvantagesGroupUIProps } from "./types";

import styles from "./advantages-group.module.css";

export const AdvantagesGroupUI = forwardRef<
  HTMLUListElement,
  TAdvantagesGroupUIProps
>(({ group, children }, ref) => {
  return (
    <ul id={group.id} className={styles.advantages__group} ref={ref}>
      {children}
    </ul>
  );
});
