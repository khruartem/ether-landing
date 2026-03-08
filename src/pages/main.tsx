import type { FC } from "react";

import { Page } from "../components/page";
import { HeroUI } from "../components/ui/hero";
import { About } from "../components/about";

export const Main: FC = () => {
  return (
    <Page>
      <HeroUI />
      <About />
    </Page>
  );
};
