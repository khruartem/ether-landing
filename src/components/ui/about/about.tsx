import type { FC } from "react";
import { SectionUI } from "../section";
import { SectionTitleUI } from "../section-title";
import { Typography } from "../../../utils/typography";
import flashSvg from "../../../assets/icons/flash.svg";
import { Colors } from "../../../utils/colors";

export const AboutUI: FC = () => {
  return (
    <SectionUI id="about" decorated>
      <SectionTitleUI
        text={["Цифровой интерфейс", "организации мероприятий"]}
        emphasized={"организации"}
        subtitle={{
          text: "У нас общая цель",
          icon: flashSvg,
          backgroundColor: Colors.Light80,
        }}
        typography={Typography.Title_600_68}
        as={"h2"}
      />
    </SectionUI>
  );
};
