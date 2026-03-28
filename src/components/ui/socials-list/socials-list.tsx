import type { FC } from "react";

import { Telegram } from "../../telegram";
import { VK } from "../../vk";

import styles from "./socials-list.module.css";

export const SocialsListUI: FC = () => {
  return (
    <div className={styles["socials-list"]}>
      <Telegram />
      <VK />
    </div>
  );
};
