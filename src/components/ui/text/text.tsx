import type { CSSProperties, FC } from "react";

import type { TTextUIProps } from "./types";

import styles from "./text.module.css";
import clsx from "clsx";

export const TextUI: FC<TTextUIProps> = ({
  as: Tag = "p",
  children,
  typography,
  color,
  className,
  onClick,
}) => {
  return (
    <Tag
      className={clsx(styles.text, className && className)}
      style={
        {
          "--font": typography.font,
          "--weight": typography.weight,
          "--size": typography.size,
          "--line-height": typography.lineHeight,
          "--text-align": typography.textAlign ?? "left",
          "--color": color,
        } as CSSProperties
      }
      onClick={onClick}
    >
      {/* {text.split(" ").map((word, index, array) => {
        return word === emphasized ? (
          <span className={styles.text_emphasized}>{word}</span>
        ) : index === array.length ? (
          word
        ) : (
          `${word} `
        );
      })} */}
      {children}
    </Tag>
  );
};
