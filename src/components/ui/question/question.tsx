import { forwardRef } from "react";
import clsx from "clsx";

import { TextUI } from "../text";
import { QuestionOpenButtonUI } from "../question-open-button";

import type { TQuestionUIProps } from "./types";

import { Typography } from "../../../utils/typography";
import { Colors } from "../../../utils/colors";

import { useStyle } from "./useStyle";
import { useTitleTypography } from "./useTitleTypography";

import styles from "./question.module.css";

export const QuestionUI = forwardRef<HTMLDivElement, TQuestionUIProps>(
  ({ question, isOpened, onOpen }, ref) => {
    const questionStyle = useStyle(isOpened);
    const titleTypography = useTitleTypography();

    const { title, text } = question;

    return (
      <li className={styles.question} onClick={onOpen} style={questionStyle}>
        <div
          className={clsx(
            styles.question__top,
            !isOpened && styles.question__top_clamped,
          )}
        >
          <TextUI typography={Typography[titleTypography]} color={Colors.Navy}>
            {title}
          </TextUI>
          <QuestionOpenButtonUI isOpened={isOpened} />
        </div>
        <div
          className={clsx(
            styles.question__content,
            isOpened
              ? styles.question__content_opened
              : styles.question__content_closed,
          )}
          ref={ref}
        >
          <TextUI typography={Typography.Text_400_18} color={Colors.Navy}>
            {text}
          </TextUI>
        </div>
      </li>
    );
  },
);
