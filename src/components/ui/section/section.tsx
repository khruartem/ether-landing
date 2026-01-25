import type { FC } from "react";
import clsx from "clsx";

import type { TSectionUIProps } from "./types";

import styles from "./section.module.css";

export const SectionUI: FC<TSectionUIProps> = ({
  id,
  decorated,
  className,
  children,
}) => {
  return (
    <section
      id={id}
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
