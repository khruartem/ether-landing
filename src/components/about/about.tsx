import type { FC } from "react";

import { AboutUI } from "../ui/about";

import { Colors } from "../../utils/colors";
import { Typography } from "../../utils/typography";
import type { TSection, TSectionTitle } from "../../utils/types";

import flashSvg from "../../assets/icons/flash.svg";

export const About: FC = () => {
  const sectionProps: TSection = {
    id: "about",
    decorated: true,
  };

  const titleProps: TSectionTitle = {
    text: ["Цифровой интерфейс", "организации мероприятий"],
    emphasized: "организации",
    subtitle: {
      text: "У нас общая цель",
      icon: flashSvg,
      backgroundColor: Colors.Light80,
    },
    typography: Typography.Title_600_68,
    as: "h2",
  };

  return <AboutUI contentSectionProps={{ sectionProps, titleProps }} />;
};
