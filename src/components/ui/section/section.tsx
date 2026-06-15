import type { FC } from "react";
import clsx from "clsx";

import type { TSectionUIProps } from "./types";

import { useStyle } from "./useStyle";

import styles from "./section.module.css";

export const SectionUI: FC<TSectionUIProps> = ({
  id,
  decorated,
  gap,
  className,
  style,
  children,
}) => {
  const sectionStyle = useStyle();

  return (
    <section
      id={id}
      style={{ ...sectionStyle, ...style, gap }}
      className={clsx(
        styles.section,
        decorated && styles.section_decorated,
        className && className,
      )}
    >
      {children}
    </section>
  );
};
