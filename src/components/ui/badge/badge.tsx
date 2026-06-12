import type { CSSProperties, FC } from "react";
import clsx from "clsx";

import { BadgeTitleUI } from "../badge-title";

import type { TBadgeUIProps } from "./types";

import { useStyle } from "./useStyle";

import styles from "./badge.module.css";

export const BadgeUI: FC<TBadgeUIProps> = ({
  title,
  gap = 4,
  children,
  className,
}) => {
  const badgeStyle = useStyle();

  return (
    <div
      className={clsx(styles.hero__block, className && className)}
      style={{ "--gap": `${gap}px`, ...badgeStyle } as CSSProperties}
    >
      {title && <BadgeTitleUI title={title} />}
      {children}
    </div>
  );
};
