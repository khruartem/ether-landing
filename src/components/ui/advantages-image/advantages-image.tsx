// import { forwardRef } from "react";

// import type { TAdvantagesImageUIProps } from "./types";

// import styles from "./advantages-image.module.css";
// import { useStyle } from "./useStyle";

// export const AdvantagesImageUI = forwardRef<
//   HTMLImageElement,
//   TAdvantagesImageUIProps
// >(({ src, transform, position, maxHeight }, ref) => {
//   const imgStyle = useStyle({position, maxHeight, transform});

//   return (
//     <img
//       src={src}
//       alt="Изображение секции Подробности и возможности"
//       className={styles.advantages__image}
//       // style={
//       //   {
//       //     ...transform,
//       //     "--inset": position,
//       //     "--max-height": maxHeight,
//       //   } as CSSProperties
//       // }
//       style={imgStyle}
//       ref={ref}
//     />
//   );
// });

import { type FC } from "react";

import type { TAdvantagesImageUIProps } from "./types";

import { useStyle } from "./useStyle";

import styles from "./advantages-image.module.css";

export const AdvantagesImageUI: FC<TAdvantagesImageUIProps> = ({
  src,
  styleConfig,
}) => {
  const imgStyle = useStyle(styleConfig);

  return (
    <img
      src={src}
      alt="Изображение секции Подробности и возможности"
      className={styles.advantages__image}
      style={imgStyle}
    />
  );
};
