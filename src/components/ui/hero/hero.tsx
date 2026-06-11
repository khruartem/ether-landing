import type { FC } from "react";

import { SectionUI } from "../section";
import { SectionTitleUI } from "../section-title";
import { HeroGridUI } from "../hero-grid";
import { HeroGridItemUI } from "../hero-grid-item";
import { Activity } from "../../activity";
import { SmallTask } from "../../small-task";
import { Schedule } from "../../schedule";
import { Portfolio } from "../../portfolio";
import { TabBar } from "../../tab-bar";
import { Event } from "../../event";

import { Typography } from "../../../utils/typography";
import { useMedia } from "../../../hooks/useMedia";

export const HeroUI: FC = () => {
  const { isLarge, isDesktop } = useMedia();
  const isLargeResolution = isLarge || isDesktop;

  return (
    <SectionUI>
      <SectionTitleUI
        text={["Будьте", "в Эфире"]}
        emphasized="Эфире"
        typography={Typography.Title_900_100}
        as={"h1"}
      />
      <HeroGridUI>
        <HeroGridItemUI>
          <Activity />
          <SmallTask />
        </HeroGridItemUI>
        <HeroGridItemUI noWrap={isLargeResolution ? true : false}>
          <Portfolio />
          <Schedule />
        </HeroGridItemUI>
        <HeroGridItemUI>
          <TabBar />
          <Event />
        </HeroGridItemUI>
      </HeroGridUI>
    </SectionUI>
  );
};
