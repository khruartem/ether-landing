import type { FC } from "react";
import clsx from "clsx";

import { TitleUI } from "../title/title";
import { SectionSubtitleUI } from "../section-subtitle";

import type { TSectionTitleUIProps } from "./types";

import { Colors } from "../../../utils/colors";
import { Typography } from "../../../utils/typography";

import { useTypography } from "./useTypography";

import styles from "./section-title.module.css";

export const SectionTitleUI: FC<TSectionTitleUIProps> = ({
  text,
  subtitle,
  emphasized,
  as: Tag,
  style,
  className,
}) => {
  const titleTypography = useTypography();

  return (
    <div
      className={clsx(styles["section-title"], className && className)}
      style={style}
    >
      {subtitle && <SectionSubtitleUI {...subtitle} />}
      {text.length > 1 ? (
        <Tag className={styles["main-title"]}>
          <TitleUI
            as={"span"}
            text={text[0]}
            typography={Typography[titleTypography]}
            color={Colors.Navy}
            emphasized={emphasized}
          />
          <TitleUI
            as={"span"}
            text={text[1]}
            typography={Typography[titleTypography]}
            color={Colors.Navy}
            emphasized={emphasized}
          />
        </Tag>
      ) : (
        <TitleUI
          as={Tag}
          text={text[0]}
          typography={Typography[titleTypography]}
          color={Colors.Navy}
          emphasized={emphasized}
        />
      )}
    </div>
  );
};
