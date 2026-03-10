import type { FC } from "react";
import clsx from "clsx";

import type { TSectionUIProps } from "./types";

import styles from "./section.module.css";

export const SectionUI: FC<TSectionUIProps> = ({
  id,
  decorated,
  paddinged = true,
  gap,
  className,
  children,
}) => {
  return (
    <section
      id={id}
      style={{ gap: gap }}
      className={clsx(
        styles.section,
        decorated && styles.section_decorated,
        paddinged && styles.section_paddinged,
        className && className,
      )}
    >
      {children}
    </section>
  );
};
