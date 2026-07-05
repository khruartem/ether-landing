import type { FC } from "react";
import clsx from "clsx";

import { TextUI } from "../text";
import { QuestionOpenButtonUI } from "../question-open-button";

import type { TQuestionUIProps } from "./types";

import { Typography } from "../../../utils/typography";
import { Colors } from "../../../utils/colors";

import { useTitleTypography } from "./useTitleTypography";

import styles from "./question.module.css";

export const QuestionUI: FC<TQuestionUIProps> = ({
  question,
  isOpened,
  onOpen,
}) => {
  const titleTypography = useTitleTypography();
  const { title, text } = question;

  return (
    <li
      className={clsx(styles.question, isOpened && styles.question_opened)}
      onClick={onOpen}
    >
      <div className={styles.question__top}>
        <TextUI typography={Typography[titleTypography]} color={Colors.Navy}>
          {title}
        </TextUI>
        <QuestionOpenButtonUI isOpened={isOpened} />
      </div>
      <TextUI
        typography={Typography.Text_400_18}
        color={Colors.Navy}
        className={clsx(
          styles.question__text,
          isOpened && styles.question__text_opened,
        )}
      >
        {text}
      </TextUI>
    </li>
  );
};
