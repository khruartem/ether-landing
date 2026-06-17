import type { FC } from "react";

import { FAQUI } from "../ui/faq";

import type { TSection, TSectionTitle } from "../../utils/types";
import { Colors } from "../../utils/colors";

export const FAQ: FC = () => {
  const sectionProps: TSection = {
    id: "faq",
    decorated: true,
  };

  const titleProps: TSectionTitle = {
    text: ["Если остались вопросы"],
    emphasized: "вопросы",
    subtitle: {
      text: "Прозрачность во всем",
      icon: "message",
      backgroundColor: Colors.Light80,
    },
    as: "h2",
  };

  return <FAQUI contentSectionProps={{ sectionProps, titleProps }} />;
};
