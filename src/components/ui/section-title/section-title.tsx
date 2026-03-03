import type { FC } from "react";

import { TitleUI } from "../title/title";
import { SectionSubtitleUI } from "../section-subtitle";

import type { TSectionTitleUIProps } from "./types";

import { Colors } from "../../../utils/colors";

import styles from "./section-title.module.css";

export const SectionTitleUI: FC<TSectionTitleUIProps> = ({
  text,
  subtitle,
  emphasized,
  typography,
  as: Tag,
}) => {
  return (
    <div className={styles["section-title"]}>
      {subtitle && <SectionSubtitleUI {...subtitle} />}
      {text.length > 1 ? (
        <Tag className={styles["main-title"]}>
          <TitleUI
            as={"span"}
            text={text[0]}
            typography={typography}
            color={Colors.Navy}
            emphasized={emphasized}
          />
          <TitleUI
            as={"span"}
            text={text[1]}
            typography={typography}
            color={Colors.Navy}
            emphasized={emphasized}
          />
        </Tag>
      ) : (
        <TitleUI
          as={Tag}
          text={text[0]}
          typography={typography}
          color={Colors.Navy}
        />
      )}
    </div>
  );
};
