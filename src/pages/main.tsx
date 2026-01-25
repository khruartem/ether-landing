import type { FC } from "react";

import { Page } from "../components/page";
import { HeroUI } from "../components/ui/hero/hero";

export const Main: FC = () => {
  return (
    <Page>
      <HeroUI />
    </Page>
  );
};
