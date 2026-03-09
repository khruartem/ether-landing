import { useState, type FC } from "react";

import { AdvantagesUI } from "../ui/advantages";

import type { TAdvantagesContextValue } from "./types";

import type {
  TAdvantagesTab,
  TSection,
  TSectionTitle,
} from "../../utils/types";
import { Colors } from "../../utils/colors";
import { Typography } from "../../utils/typography";

import dataSVG from "../../assets/icons/data.svg";
import { AdvantagesProvider } from "./advantages-provider";

export const Advantages: FC = () => {
  const [currentTab, setCurrentTab] = useState<TAdvantagesTab>("artists");

  const tabs: TAdvantagesTab[] = ["artists", "events", "schedule"];

  const handleTabChange = (tab: TAdvantagesTab) => {
    setCurrentTab(tab);
  };

  const advantagesContextValue: TAdvantagesContextValue = {
    tabs,
    currentTab,
    onTabChange: handleTabChange,
  };

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

  return (
    <AdvantagesProvider value={advantagesContextValue}>
      <AdvantagesUI contentSectionProps={{ sectionProps, titleProps }} />
    </AdvantagesProvider>
  );
};
