import type { FC } from "react";

import { Icon } from "../../icon";

import styles from "./add.module.css";

export const AddBadgeUI: FC = () => {
  return (
    <li className={styles.add}>
      <Icon name="plus" width={20} height={20} className={styles.add__icon} />
    </li>
  );
};
