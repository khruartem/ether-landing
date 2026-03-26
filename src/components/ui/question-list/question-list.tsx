import type { FC } from "react";

import { Question } from "../../question";

import type { TQuestionListUIProps } from "./types";

import styles from "./question-list.module.css";

export const QuestionListUI: FC<TQuestionListUIProps> = ({ questions }) => {
  return (
    <ul className={styles.questions}>
      {questions.map((question, index) => (
        <Question key={index} question={question} />
      ))}
    </ul>
  );
};
