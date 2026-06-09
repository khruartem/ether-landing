import type { FC } from "react";
import clsx from "clsx";

import { Icon } from "../../icon";

import type { TOpenNavigationUIProps } from "./types";

import styles from "./open-navigation.module.css";
import sharedStyles from "../../../shared/styles.module.css";

export const OpenNavigationUI: FC<TOpenNavigationUIProps> = ({
  opened,
  onOpen,
}) => {
  return (
    <div
      onClick={onOpen}
      className={clsx(styles.navigation__open, sharedStyles["button-icon"])}
    >
      <Icon name={opened ? "close" : "burger"} width={24} height={24} />
    </div>
  );
};
