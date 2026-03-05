import type { FC } from "react";

import { BadgePlus } from "../../../icons";

import styles from "./add.module.css";

export const AddBadgeUI: FC = () => {
  return (
    <li className={styles.add}>
      <BadgePlus />
    </li>
  );
};
