import { useEffect, useState, type FC } from "react";

import { AdvantagesImageUI } from "../ui/advantages-image";

import type { TAdvantagesImageProps } from "./types";

import type { TAdvantagesTransform } from "../../utils/types";

export const AdvantagesImage: FC<TAdvantagesImageProps> = ({
  image,
  inView,
}) => {
  const [transform, setTransform] = useState<TAdvantagesTransform | undefined>(
    image?.defaultTransform,
  );

  const {src, inViewTransform, position, maxHeight} = image;

  useEffect(() => {
    const changeStyle = (inViewTransform: TAdvantagesTransform) => {
      setTransform(inViewTransform);
    };

    if (inView) {
      changeStyle(inViewTransform);
    }
  }, [inViewTransform, inView]);

  return (
    <AdvantagesImageUI
      src={src}
      transform={transform}
      position={position}
      maxHeight={maxHeight}
    />
  );
};
