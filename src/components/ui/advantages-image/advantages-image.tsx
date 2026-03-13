import { type FC } from "react";

import type { TAdvantagesImageUIProps } from "./types";

export const AdvantagesImageUI: FC<TAdvantagesImageUIProps> = ({
  src,
  transform,
}) => {
  return (
    <img
      src={src}
      alt="Изображение секции Подробности и возможности"
      style={transform}
    />
  );
};
