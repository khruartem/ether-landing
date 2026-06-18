import type { FC } from "react";
import clsx from "clsx";

import type { TSectionUIProps } from "./types";

import { useStyle } from "./useStyle";
import { useStyleDecorated } from "./useStyleDecorated";

import styles from "./section.module.css";

export const SectionUI: FC<TSectionUIProps> = ({
  id,
  decorated,
  className,
  style,
  children,
}) => {
  const sectionStyle = useStyle();
  const sectionDecoratedStyle = useStyleDecorated();

  return (
    <section
      id={id}
      style={{
        ...sectionStyle,
        ...(decorated ? sectionDecoratedStyle : undefined),
        ...style,
      }}
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
