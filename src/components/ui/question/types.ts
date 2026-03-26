import type { TQuestion } from "../../../utils/types";

export type TQuestionUIProps = {
  question: TQuestion;
  isOpened: boolean;
  onOpen: () => void;
};
