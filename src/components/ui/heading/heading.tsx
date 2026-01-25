import type { FC } from "react";

import { TextUI } from "../text";

import styles from "./heading.module.css";

export const HeadingUI: FC = () => {
  return (
    <h1 className={styles.heading}>
      <TextUI
        as={"span"}
        text={"Будьте"}
        typography={{
          font: "Unbounded",
          weight: "900",
          size: "100px",
          lineHeight: "100px",
          textAlign: "center",
          color: "#0B3954",
        }}
      />
      <TextUI
        as={"span"}
        text={"в Эфире"}
        typography={{
          font: "Unbounded",
          weight: "900",
          size: "100px",
          lineHeight: "100px",
          textAlign: "center",
          color: "#0B3954",
        }}
        emphasized="Эфире"
      />
    </h1>
  );
};
