import type { FC } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import { Icon } from "../../icon";

import type { TSocialsUIProps } from "./types";

import styles from "./socials.module.css";
import sharedStyles from "../../../shared/styles.module.css";

export const SocialsUI: FC<TSocialsUIProps> = ({ url, name }) => {
  return (
    <Link
      to={url}
      target="_blank"
      className={clsx(styles.socials, styles[sharedStyles["button-icon"]])}
    >
      <Icon name={name} width={32} height={32} />
    </Link>
  );
};
