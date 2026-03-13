import { useEffect, useState, type FC } from "react";
import type { TAdvantagesImageProps } from "./types";
import { AdvantagesImageUI } from "../ui/advantages-image";

export const AdvantagesImage: FC<TAdvantagesImageProps> = ({ image }) => {
  const [transform, setTransform] = useState(image.transformDefault);

  useEffect(() => {
    const changeStyle = () => {
      setTransform(image.transformOnMount);
    };

    changeStyle();
  }, [image.transformOnMount]);

  return <AdvantagesImageUI src={image.src} transform={transform} />;
};
