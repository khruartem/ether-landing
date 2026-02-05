import type { FC } from "react";
import type { TAvatarListUIProps } from "./types";

import styles from "./avatar-images-list.module.css";

export const AvatarListUI: FC<TAvatarListUIProps> = ({ avatars }) => {
  return (
    <ul className={styles["avatar-list"]}>
      {avatars.map((avatar, index) => {
        return (
          <li key={index}>
            <AvatarUI avatar={avatar} />
          </li>
        );
      })}
    </ul>
  );
};
