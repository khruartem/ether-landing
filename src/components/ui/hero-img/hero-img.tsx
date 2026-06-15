import type { FC } from "react";

import { useSrc } from "./useSrc";

import styles from "./hero-img.module.css";

export const HeroImgUI: FC = () => {
  const src = useSrc();

  return (
    <img
      src={src}
      alt={"Пример интерфейса Эфира"}
      className={styles.hero__img}
    />
  );
};
