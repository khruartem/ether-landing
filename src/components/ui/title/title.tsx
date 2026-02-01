import type { FC } from "react";
import { TextUI } from "../text";
import type { TTitleUIProps } from "./types";

import styles from "./title.module.css";

export const TitleUI: FC<TTitleUIProps> = ({
  as,
  text,
  typography,
  emphasized,
  className,
}) => {
  return (
    <TextUI as={as} typography={typography} className={className}>
      {text.split(" ").map((word, index, array) => {
        return word === emphasized ? (
          <span className={styles.text_emphasized}>{word}</span>
        ) : index === array.length ? (
          word
        ) : (
          `${word} `
        );
      })}
    </TextUI>
  );
};
