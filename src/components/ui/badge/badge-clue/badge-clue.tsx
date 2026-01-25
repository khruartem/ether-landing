import type { FC } from "react";

import { TextUI } from "../../text";

import type { TBadgeClueUIProps } from "./types";

import { Colors } from "../../../../utils/colors";

export const BadgeClueUI: FC<TBadgeClueUIProps> = ({ text }) => {
  return (
    <TextUI
      text={text}
      typography={{
        font: "Roboto",
        weight: "400",
        size: "14px",
        lineHeight: "20px",
        color: Colors.Dark80,
      }}
    />
  );
};
