import type { FC } from "react";

import styles from "./avatar.module.css";
import type { TAvatarUIProps } from "./types";

export const AvatarUI: FC<TAvatarUIProps> = ({ avatar }) => {
  return <img className={styles.avatar} src={avatar} alt="Аватар" />;
};
