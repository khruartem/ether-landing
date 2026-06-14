import type { FC } from "react";

import { AvatarUI } from "../avatar";

import type { TAvatarListUIProps } from "./types";

import { useAvatarListItemStyle } from "./useAvatarListItemStyle";
import { useAvatarListStyle } from "./useAvatarListStyle";

import styles from "./avatar-list.module.css";

export const AvatarListUI: FC<TAvatarListUIProps> = ({ avatars }) => {
  const avatarListStyle = useAvatarListStyle();
  const avatarListItemStyle = useAvatarListItemStyle();

  return (
    <ul className={styles["avatar-list"]} style={avatarListStyle}>
      {avatars.map((avatar, index) => {
        return (
          <li
            key={index}
            style={{ ...avatarListItemStyle, zIndex: avatars.length - index }}
          >
            <AvatarUI avatar={avatar} />
          </li>
        );
      })}
    </ul>
  );
};
