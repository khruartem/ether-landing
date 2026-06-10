import type { FC } from "react";
import clsx from "clsx";

import { Menu } from "../../menu";
import { SocialsListUI } from "../socials-list";
import { BackToMainUI } from "../back-to-main";
import { BurgerContent } from "../../burger-content";
import { BurgerBottomUI } from "../burger-bottom";

import type { TBurgerUIProps } from "./types";

import { useStyle } from "./useStyle";

import styles from "./burger.module.css";

export const BurgerUI: FC<TBurgerUIProps> = ({ opened }) => {
  const burgerStyle = useStyle();

  return (
    <div
      className={clsx(
        styles.burger,
        opened ? styles.burger_opened : styles.burger_closed,
      )}
      style={burgerStyle}
    >
      <BurgerContent>
        <Menu />
      </BurgerContent>
      <BurgerBottomUI>
        <SocialsListUI />
        <BackToMainUI />
      </BurgerBottomUI>
    </div>
  );
};
