import type { FC } from "react";

import iphoneMockupSmall from "../../../assets/iphone_mockup_small.png";

import { useMedia } from "../../../hooks/useMedia";
import { useStyle } from "./useStyle";

import styles from "./about-img.module.css";

export const AboutImgUI: FC = () => {
  const { isLaptop, isTablet, isMobile } = useMedia();
  const imgStyle = useStyle();

  const smallResolution = isLaptop || isTablet || isMobile;

  return (
    smallResolution && (
      <img
        src={iphoneMockupSmall}
        alt="Мокап интерфейса Эфир на мобильном устройстве"
        className={styles.about__img}
        style={imgStyle}
      />
    )
  );
};
