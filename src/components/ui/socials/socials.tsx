import type { FC } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import type { TSocialsUIProps } from "./types";

import telegramSvg from "../../../assets/icons/telegram.svg";
import vkSvg from "../../../assets/icons/vk.svg";

import styles from "./socials.module.css";

export const SocialsUI: FC<TSocialsUIProps> = ({ url, type }) => {
  return (
    <Link to={url} target="_blank" className={styles.socials}>
      <img
        src={clsx(type === "telegram" && telegramSvg, type === "vk" && vkSvg)}
        alt="Иконка соц. сетей"
      />
    </Link>
  );
};
