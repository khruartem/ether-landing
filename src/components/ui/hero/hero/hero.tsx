import type { FC } from "react";
import { SectionUI } from "../../section";
import { HeadingUI } from "../../heading";
import { HeroGridUI } from "../hero-grid";
import { Activity } from "../../../hero/activity";

export const HeroUI: FC = () => {
  return (
    <SectionUI>
      <HeadingUI />
      <HeroGridUI>
        <Activity />
      </HeroGridUI>
    </SectionUI>
  );
};
