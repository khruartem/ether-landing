import type { FC } from "react";

import { OTLogo } from "../../icons";

import type { TOTLogoUIProps } from "./types";

import styles from "./ot-logo.module.css";

export const OTLogoUI: FC<TOTLogoUIProps> = ({ text }) => {
  return (
    <div className={styles["ot-logo"]}>
      <Text>{text}</Text>
      <OTLogo />
    </div>
  );
};
