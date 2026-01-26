import type { FC } from "react";

import { Plus } from "../../../icons";

import styles from "./add.module.css";

export const AddBadgeUI: FC = () => {
  return (
    <li className={styles.add}>
      <Plus />
    </li>
  );
};
