import { useMemo, type FC } from "react";

import { AdvantagesImageUI } from "../ui/advantages-image";

import type { TAdvantagesImageProps } from "./types";

import { useAdvantagesItemContext } from "../advantages-item/advantages-item-context";

export const AdvantagesImage: FC<TAdvantagesImageProps> = ({ image }) => {
  const { inView } = useAdvantagesItemContext();
  const { src, inViewStyleConfig, defaultStyleConfig } = image;

  // useEffect(() => {
  //   const changeStyle = (styleConfig: TStyleConfig) => {
  //     setStyleConfig(styleConfig);
  //   };

  //   if (inView) {
  //     changeStyle(inViewStyleConfig);
  //   }
  // }, [inViewStyleConfig, inView]);

  const currentStyleConfig = useMemo(() => {
    if (inView) {
      return { ...defaultStyleConfig, ...inViewStyleConfig };
    }
    return defaultStyleConfig;
  }, [inView, defaultStyleConfig, inViewStyleConfig]);

  return <AdvantagesImageUI src={src} styleConfig={currentStyleConfig} />;
};
