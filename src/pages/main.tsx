import type { FC } from "react";

import { Page } from "../components/page";
import { HeroUI } from "../components/ui/hero";
import { About } from "../components/about";
import { Advantages } from "../components/advantages";
import { FAQ } from "../components/faq";

export const Main: FC = () => {
  return (
    <Page>
      <HeroUI />
      <About />
      <Advantages />
      <FAQ />
    </Page>
  );
};
