import type { FC } from "react";

import { SectionUI } from "../section";
import { SectionTitleUI } from "../section-title";
import { HeroImgUI } from "../hero-img";
import { useStyle } from "./useStyle";

import { Typography } from "../../../utils/typography";

import sharedStyles from "../../../shared/styles.module.css";

export const HeroUI: FC = () => {
  const sectionStyle = useStyle();

  return (
    <SectionUI style={sectionStyle}>
      <SectionTitleUI
        text={["Будьте", "в Эфире"]}
        emphasized="Эфире"
        typography={Typography.Title_900_100}
        as={"h1"}
        className={sharedStyles["visually-hidden"]}
      />
      {/* <HeroGridUI>
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
      </HeroGridUI> */}
      <HeroImgUI />
    </SectionUI>
  );
};
