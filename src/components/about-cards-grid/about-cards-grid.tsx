import type { FC } from "react";

import { AboutCardsGridUI } from "../ui/about-cards-grid";

import type { TAboutCard } from "../../utils/types";

import gameboySVG from "../../assets/icons/gameboy.svg";
import usersSVG from "../../assets/icons/users.svg";
import maximizeSVG from "../../assets/icons/maximize.svg";
import sunSVG from "../../assets/icons/sun.svg";
import mobileSVG from "../../assets/icons/mobile.svg";
import designSVG from "../../assets/icons/designtools.svg";

export const AboutCardsGrid: FC = () => {
  const cards: TAboutCard[] = [
    {
      icon: gameboySVG,
      title: "От творцов для творцов",
      text: "Эфир — это альтернатива традиционным таскерам, которые перегружены обилием лишних функций, сложным и тяжелым для восприятия интерфейсом.",
    },
    {
      icon: usersSVG,
      title: "Творческие объединения",
      text: "Объединяйтесь с единомышленниками, создавайте мероприятия и оставляйте свой след. Концентрируйтесь на своих идеях, или следите за другими творцами.",
    },
    {
      icon: maximizeSVG,
      title: "Самовыражение без границ",
      text: "Делитесь своими талантами, загружайте свои работы в портфолио и рассказывайте о том, в чем вы ас. Представители других цехов оценят вас по достоинству.",
    },
    {
      icon: sunSVG,
      title: "Без бюрократии и бизнесов",
      text: "Творцы — люди уникальные и им нужна уникальная атмосфера. В Эфире нет места консьюмеризму, канцелярским словам и коммерческой жадности.",
    },
    {
      icon: mobileSVG,
      title: "Доступность и легкость",
      text: "Изначально Эфир спроектирован с учетом особенностей смартфонов. Такой подход помогает отсечь лишнее, чтобы самое главное всегда было под рукой.",
    },
    {
      icon: designSVG,
      title: "Концепт превыше всего",
      text: "Среди нас нет аналитиков и технарей — суть в творчестве, но без излишнего формализма. Мы делаем это для себя и людей, разделяющих наши взгляды.",
    },
  ];

  const rows = Math.round(cards.length / 2);

  return <AboutCardsGridUI cards={cards} columns={2} rows={rows} />;
};
