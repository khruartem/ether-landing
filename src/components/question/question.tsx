import { useState, type FC } from "react";
import { QuestionUI } from "../ui/question";
import type { TQuestionProps } from "./types";

export const Question: FC<TQuestionProps> = ({ question }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleOpen = (isOpened: boolean) => {
    setIsOpened(isOpened);
  };

  return (
    <QuestionUI
      question={question}
      isOpened={isOpened}
      onOpen={() => handleOpen(!isOpened)}
    />
  );
};
