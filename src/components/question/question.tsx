import { useEffect, useRef, useState, type FC } from "react";
import { QuestionUI } from "../ui/question";
import type { TQuestionProps } from "./types";

export const Question: FC<TQuestionProps> = ({ question }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handleOpen = (isOpened: boolean) => {
    setIsOpened(isOpened);
  };

  useEffect(() => {
    const contentEl = contentRef.current;
    if (!contentEl) return;

    if (isOpened) {
      // сначала сбрасываем, чтобы перерасчитать корректно
      contentEl.style.maxHeight = "0px";
      // нужно дать браузеру применить нулевой maxHeight перед установкой реальной высоты
      // но это не всегда обязательно — оставлено для стабильности анимации
      requestAnimationFrame(() => {
        contentEl.style.maxHeight = contentEl.scrollHeight + "px";
      });
    } else {
      contentEl.style.maxHeight = "0px";
    }
  }, [isOpened]);

  return (
    <QuestionUI
      question={question}
      isOpened={isOpened}
      onOpen={() => handleOpen(!isOpened)}
      ref={contentRef}
    />
  );
};
