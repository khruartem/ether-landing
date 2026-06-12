import type { FC } from "react";

import { Icon } from "../../icon";

import { Colors } from "../../../utils/colors";

import { useAddBadgeStyle } from "./useAddBadgeStyle";
import { useIconStyle } from "./useIconStyle";

import styles from "./add.module.css";

export const AddBadgeUI: FC = () => {
  const addBadgeStyle = useAddBadgeStyle();
  const iconStyle = useIconStyle();

  return (
    <li className={styles.add} style={addBadgeStyle}>
      <Icon name="plus" color={Colors.Nephritis100} style={iconStyle} />
    </li>
  );
};
