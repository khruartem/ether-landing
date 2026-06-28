// import { useEffect, useState, type FC } from "react";

// import { AdvantagesImageUI } from "../ui/advantages-image";

// import type { TAdvantagesImageProps } from "./types";

// import type { TAdvantagesTransform } from "../../utils/types";

// export const AdvantagesImage: FC<TAdvantagesImageProps> = ({
//   image,
//   inView,
// }) => {
//   const [transform, setTransform] = useState<TAdvantagesTransform | undefined>(
//     image?.defaultTransform,
//   );

//   const {src, inViewTransform, position, maxHeight} = image;

//   useEffect(() => {
//     const changeStyle = (inViewTransform: TAdvantagesTransform) => {
//       setTransform(inViewTransform);
//     };

//     if (inView) {
//       changeStyle(inViewTransform);
//     }
//   }, [inViewTransform, inView]);

//   return (
//     <AdvantagesImageUI
//       src={src}
//       transform={transform}
//       position={position}
//       maxHeight={maxHeight}
//     />
//   );
// };


import { useMemo, type FC } from "react";

import { AdvantagesImageUI } from "../ui/advantages-image";

import type { TAdvantagesImageProps } from "./types";

export const AdvantagesImage: FC<TAdvantagesImageProps> = ({
  image,
  inView,
}) => {
  const {src, inViewStyleConfig, defaultStyleConfig} = image;

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

  return (
    <AdvantagesImageUI
      src={src}
      styleConfig={currentStyleConfig}
    />
  );
};

