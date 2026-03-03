import type { FC } from "react";

import { SectionUI } from "../../section";
import { SectionTitleUI } from "../../section-title";
import { HeroGridUI } from "../hero-grid";
import { Activity } from "../../../hero/activity";
import { Schedule } from "../../../hero/schedule";
import { SmallTask } from "../../../hero/small-task";
import { Portfolio } from "../../../hero/portfolio";
import { TabBar } from "../../../badge/tab-bar";
import { EventUI } from "../event";

import { Typography } from "../../../../utils/typography";

import styles from "./hero.module.css";

export const HeroUI: FC = () => {
  return (
    <SectionUI>
      <SectionTitleUI
        text={["Будьте", "в Эфире"]}
        emphasized="Эфире"
        typography={Typography.Title_900_100}
        as={"h1"}
      />
      <HeroGridUI>
        <div className={styles.container}>
          <Activity />
          <SmallTask />
        </div>
        <Portfolio />
        <Schedule />
        <div className={styles.container}>
          <TabBar />
          <EventUI />
        </div>
      </HeroGridUI>
    </SectionUI>
  );
};
