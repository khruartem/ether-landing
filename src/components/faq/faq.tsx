import type { FC } from "react";

import { FAQUI } from "../ui/faq";

import type { TSection, TSectionTitle } from "../../utils/types";
import { Colors } from "../../utils/colors";
import { Typography } from "../../utils/typography";

import questionSvg from "../../assets/icons/message-question.svg";

export const FAQ: FC = () => {
  const sectionProps: TSection = {
    id: "faq",
    decorated: true,
    gap: 60,
  };

  const titleProps: TSectionTitle = {
    text: ["Если остались вопросы"],
    emphasized: "вопросы",
    subtitle: {
      text: "Прозрачность во всем",
      icon: questionSvg,
      backgroundColor: Colors.Light80,
    },
    typography: Typography.Title_600_68,
    as: "h2",
  };

  return <FAQUI contentSectionProps={{ sectionProps, titleProps }} />;
};
