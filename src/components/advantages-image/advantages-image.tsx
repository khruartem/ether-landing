import { useEffect, useState, type FC } from "react";

import { AdvantagesImageUI } from "../ui/advantages-image";

import type { TAdvantagesImageProps } from "./types";

import type { TAdvantagesTransform } from "../../utils/types";

export const AdvantagesImage: FC<TAdvantagesImageProps> = ({
  image,
  inView,
}) => {
  const [transform, setTransform] = useState<TAdvantagesTransform | undefined>(
    image.transformDefault,
  );

  useEffect(() => {
    const changeStyle = (transformOnMount: TAdvantagesTransform) => {
      setTransform(transformOnMount);
    };

    if (inView) {
      changeStyle(image.transformOnMount);
    }
  }, [image.transformOnMount, inView]);

  return (
    <AdvantagesImageUI
      src={image.src}
      transform={transform}
      position={image.position}
      maxHeight={image?.maxHeight}
    />
  );
};
