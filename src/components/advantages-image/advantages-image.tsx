import { useEffect, useState, type FC } from "react";
import type { TAdvantagesImageProps } from "./types";
import { AdvantagesImageUI } from "../ui/advantages-image";
import { useInView } from "react-intersection-observer";

export const AdvantagesImage: FC<TAdvantagesImageProps> = ({ image }) => {
  const [transform, setTransform] = useState(image.transformDefault);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    const changeStyle = () => {
      setTransform(image.transformOnMount);
    };

    if (inView) {
      changeStyle();
    }
  }, [image.transformOnMount, inView]);

  return <AdvantagesImageUI src={image.src} transform={transform} ref={ref} />;
};
