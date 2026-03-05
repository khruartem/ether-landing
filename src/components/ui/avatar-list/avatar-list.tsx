import type { FC } from "react";

import { AvatarUI } from "../avatar";

import type { TAvatarListUIProps } from "./types";

import styles from "./avatar-list.module.css";

export const AvatarListUI: FC<TAvatarListUIProps> = ({ avatars }) => {
  return (
    <ul className={styles["avatar-list"]}>
      {avatars.map((avatar, index) => {
        return (
          <li
            className={styles["avatar-list__item"]}
            key={index}
            style={{ zIndex: avatars.length - index }}
          >
            <AvatarUI avatar={avatar} />
          </li>
        );
      })}
    </ul>
  );
};
