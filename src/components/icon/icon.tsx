import type { FC } from "react";

import type { TIconProps } from "./types";

export const Icon: FC<TIconProps> = ({ name, width, height, className }) => {
  const spriteUrl = `${import.meta.env.BASE_URL}sprite.svg`;
  const href = `${spriteUrl}#${name}`;

  return (
    <svg width={width} height={height} className={className}>
      <use href={href} />
    </svg>
  );
};
