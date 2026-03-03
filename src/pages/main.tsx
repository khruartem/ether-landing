import type { FC } from "react";

import { Page } from "../components/page";
import { HeroUI } from "../components/ui/hero/hero";
import { AboutUI } from "../components/ui/about";

export const Main: FC = () => {
  return (
    <Page>
      <HeroUI />
      <AboutUI />
    </Page>
  );
};
