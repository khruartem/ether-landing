import type { FC } from "react";
import clsx from "clsx";

import type { TQuestionOpenButtonUIProps } from "./types";

import arrowSvg from "../../../assets/icons/chevron-down.svg";

import styles from "./question-open-button.module.css";

export const QuestionOpenButtonUI: FC<TQuestionOpenButtonUIProps> = ({
  isOpened,
}) => {
  return (
    <button
      className={clsx(
        styles.question__button,
        isOpened && styles.question__button_opened,
      )}
    >
      <img
        src={arrowSvg}
        alt={"Иконка стрелочки"}
        className={styles.question__arrow}
      />
    </button>
  );
};
