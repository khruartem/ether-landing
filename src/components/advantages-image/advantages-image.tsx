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


import { useEffect, useState, type FC } from "react";

import { AdvantagesImageUI } from "../ui/advantages-image";

import type { TAdvantagesImageProps } from "./types";

import type { TStyleConfig } from "../../utils/types";

export const AdvantagesImage: FC<TAdvantagesImageProps> = ({
  image,
  inView,
}) => {
  const [styleConfig, setStyleConfig] = useState<TStyleConfig>(
    image?.defaultStyleConfig || {},
  );

  const {src, inViewStyleConfig} = image;

  useEffect(() => {
    const changeStyle = (styleConfig: TStyleConfig) => {
      setStyleConfig(styleConfig);
    };

    if (inView) {
      changeStyle(inViewStyleConfig);
    }
  }, [inViewStyleConfig, inView]);

  return (
    <AdvantagesImageUI
      src={src}
      styleConfig={styleConfig}
    />
  );
};

