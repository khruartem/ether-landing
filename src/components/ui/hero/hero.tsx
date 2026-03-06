import type { FC } from "react";

import { SectionUI } from "../section";
import { SectionTitleUI } from "../section-title";
import { HeroGridUI } from "../hero-grid";
import { Activity } from "../../activity";
import { SmallTask } from "../../small-task";
import { Schedule } from "../../schedule";
import { Portfolio } from "../../portfolio";
import { TabBar } from "../../tab-bar";
import { Event } from "../../event";

import { Typography } from "../../../utils/typography";

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
          <Event />
        </div>
      </HeroGridUI>
    </SectionUI>
  );
};
