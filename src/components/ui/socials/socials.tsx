import type { FC } from "react";
import { Link } from "react-router-dom";

import { Icon } from "../../icon";

import type { TSocialsUIProps } from "./types";

import styles from "./socials.module.css";

export const SocialsUI: FC<TSocialsUIProps> = ({ url, name }) => {
  return (
    <Link to={url} target="_blank" className={styles.socials}>
      <Icon name={name} width={32} height={32} />
    </Link>
  );
};
