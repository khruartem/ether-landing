import type { FC } from "react";

import { Logo } from "../../logo";
import { Menu } from "../../menu";
import { OpenNavigation } from "../../open-navigation";
import { BackToMainUI } from "../back-to-main";

import { useMedia } from "../../../hooks/useMedia";

import styles from "./navigation.module.css";
import { Burger } from "../../burger";

export const NavigationUI: FC = () => {
  const { isTablet, isMobile } = useMedia();
  const isSmallResolution = isTablet || isMobile;

  return (
    <>
      {isMobile ? (
        <Logo type={"sign"} />
      ) : (
        <div className={styles.navigation}>
          <Logo type={"sign"} />
          {isSmallResolution ? <OpenNavigation /> : <Menu />}
        </div>
      )}
      {isMobile ? <OpenNavigation /> : <BackToMainUI />}
      {isSmallResolution && <Burger />}
    </>
  );
};
