import type { FC } from "react";

import { AboutCardUI } from "../about-card";

import type { TAboutCardsGridUIProps } from "./types";

import { useStyle } from "./useStyle";

import styles from "./about-cards-grid.module.css";

export const AboutCardsGridUI: FC<TAboutCardsGridUIProps> = ({ cards }) => {
  const gridStyle = useStyle(cards.length);

  return (
    <ul className={styles["cards-list"]} style={gridStyle}>
      {cards.map((card, index) => (
        <AboutCardUI key={index} card={card} />
      ))}
    </ul>
  );
};
