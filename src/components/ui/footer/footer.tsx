import type { FC } from "react";

import { Logo } from "../../logo";
import { SocialsListUI } from "../socials-list";
import { Copyright } from "../../copyright";

import { useStyle } from "./useStyle";

import styles from "./footer.module.css";

export const FooterUI: FC = () => {
  const footerStyle = useStyle();

  return (
    <footer className={styles.footer} style={footerStyle}>
      <div className={styles.footer__top}>
        <Logo type={"full"} />
        <SocialsListUI />
      </div>
      <Copyright />
    </footer>
  );
};
