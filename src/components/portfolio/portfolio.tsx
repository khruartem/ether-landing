import type { FC } from "react";

import { BadgeUI } from "../ui/badge";
import { Gallery } from "../gallery";

import type { TBadgeTitle } from "../../utils/types";

export const Portfolio: FC = () => {
  const title: TBadgeTitle = {
    text: "Портфолио творца",
  };

  return (
    <BadgeUI title={title}>
      <Gallery />
    </BadgeUI>
  );
};
