import type { FC } from "react";

import { MenuItemUI } from "../menu-item";

import type { TMenuUIProps } from "./types";

import styles from "./menu.module.css";

export const MenuUI: FC<TMenuUIProps> = ({ items }) => {
  return (
    <nav id="menu" className={styles.menu}>
      <ul className={styles.menu__list}>
        {items.map(({ label, to, onClick }, index) => (
          <li
            key={index}
            className={styles["menu__list-item"]}
            onClick={onClick}
          >
            <MenuItemUI label={label} to={to} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
