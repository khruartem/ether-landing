import { type FC } from "react";

import { BadgeUI } from "../../ui/badge/badge";
import { Calendar } from "../../badge/calendar/calendar";

import type { TBadgeTitle } from "../../../utils/types";

export const Schedule: FC = () => {
  const title: TBadgeTitle = {
    text: "График объединения",
    decorated: false,
  };

  return (
    <BadgeUI title={title} gap={12}>
      <Calendar />
    </BadgeUI>
  );
};
