import type { FC } from "react";

import { AdvantagesUI } from "../ui/advantages";

import type { TSection, TSectionTitle } from "../../utils/types";
import { Colors } from "../../utils/colors";
import { Typography } from "../../utils/typography";

import dataSVG from "../../assets/icons/data.svg";

export const Advantages: FC = () => {
  const sectionProps: TSection = {
    id: "advantages",
  };

  const titleProps: TSectionTitle = {
    text: ["Подробности и возможности"],
    subtitle: {
      text: "Все в одной экосистеме",
      icon: dataSVG,
      backgroundColor: Colors.Light60,
    },
    typography: Typography.Title_600_68,
    as: "h2",
  };

  return <AdvantagesUI contentSectionProps={{ sectionProps, titleProps }} />;
};
