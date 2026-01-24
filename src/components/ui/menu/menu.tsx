import type { FC } from "react";

import { MenuItemUI } from "../menu-item";

import type { TMenuUIProps } from "./types";

import styles from "./menu.module.css";

export const MenuUI: FC<TMenuUIProps> = ({ items }) => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        {items.map(({ label, to }, index) => (
          <li key={index} className={styles["menu__list-item"]}>
            <MenuItemUI label={label} to={to} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
