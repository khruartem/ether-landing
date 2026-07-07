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
  style,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <Tag
      className={clsx(styles.text, className && className)}
      style={
        {
          "--font":
            typeof typography === "string" ? typography : typography.font,
          "--weight":
            typeof typography === "string" ? typography : typography.weight,
          "--size":
            typeof typography === "string" ? typography : typography.size,
          "--line-height":
            typeof typography === "string" ? typography : typography.lineHeight,
          "--letter-spacing":
            typeof typography === "string"
              ? typography
              : typography.letterSpacing,
          "--text-align":
            typeof typography === "string"
              ? typography
              : (typography.textAlign ?? "left"),
          "--color": color,
          ...style,
        } as CSSProperties
      }
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
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
