import type { FC } from "react";

import { AboutCardUI } from "../about-card";

import type { TAboutCardsGridUIProps } from "./types";

import styles from "./about-cards-grid.module.css";

export const AboutCardsGridUI: FC<TAboutCardsGridUIProps> = ({
  cards,
  columns,
  rows,
}) => {
  return (
    <ul
      className={styles["cards-list"]}
      style={{
        gridTemplateColumns: `repeat(${columns}, 384px)`,
        gridTemplateRows: `repeat(${rows}, 192px)`,
      }}
    >
      {cards.map((card, index) => (
        <AboutCardUI key={index} card={card} />
      ))}
    </ul>
  );
};
