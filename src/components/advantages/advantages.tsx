import { useState, type FC, type SyntheticEvent } from "react";

import { AdvantagesProvider } from "./advantages-provider";
import { AdvantagesUI } from "../ui/advantages";

import type { TAdvantagesContextValue } from "./types";

import type {
  TAdvantagesGroup,
  TSection,
  TSectionTitle,
} from "../../utils/types";

import { Colors } from "../../utils/colors";
import { Typography } from "../../utils/typography";
import { AdvantagesItems } from "../../utils/advantagesItems";

import dataSVG from "../../assets/icons/data.svg";
import AdvantagesImage1 from "../../assets/advantages/advantages_1.png";
import AdvantagesImage2 from "../../assets/advantages/advantages_2.png";
import AdvantagesImage3 from "../../assets/advantages/advantages_3.png";
import AdvantagesImage4 from "../../assets/advantages/advantages_4.png";
import AdvantagesImage5 from "../../assets/advantages/advantages_5.png";
import AdvantagesImage6 from "../../assets/advantages/advantages_6.png";
import AdvantagesImage7 from "../../assets/advantages/advantages_7.png";
import AdvantagesImage8 from "../../assets/advantages/advantages_8.png";
import AdvantagesImage9 from "../../assets/advantages/advantages_9.png";
import AdvantagesImage10 from "../../assets/advantages/advantages_10.png";
import AdvantagesImage11 from "../../assets/advantages/advantages_11.png";

export const Advantages: FC = () => {
  const [currentTab, setCurrentTab] = useState<AdvantagesItems>(
    AdvantagesItems.artists,
  );

  const tabs: AdvantagesItems[] = [
    AdvantagesItems.artists,
    AdvantagesItems.events,
    AdvantagesItems.schedule,
  ];

  const scrollIntoGroupView = (e?: SyntheticEvent) => {
    if (e) {
      const clickedTab = e.currentTarget.textContent;
      const section = e.currentTarget?.closest("section");
      const el = section?.querySelector(
        `#${Object.keys(AdvantagesItems).find(
          (key) =>
            AdvantagesItems[key as keyof typeof AdvantagesItems] === clickedTab,
        )}`,
      );
      el?.scrollIntoView({
        behavior:
          (currentTab === "Творцы и объединения" ||
            currentTab === "Графики и события") &&
          (clickedTab === "Графики и события" ||
            clickedTab === "Творцы и объединения")
            ? "instant"
            : "smooth",
        block: "start",
      });
    }
  };

  const handleTabChange = (tab: AdvantagesItems, e?: SyntheticEvent) => {
    setCurrentTab(tab);
    scrollIntoGroupView(e);
  };

  const advantagesGroups: TAdvantagesGroup[] = [
    {
      id: "artists",
      items: [
        {
          type: AdvantagesItems.artists,
          title: "Личная информация",
          text: "Заполняйте краткие автобиографии, указывайте компетенции и расскажите миру о своих талантах в роли творца. Объединения в свою очередь предоставят вам сторонников и общие интересы.",
          images: [
            {
              position: "-100% 16%",
              maxHeight: "443.27px",
              transformOnMount: {
                transform: "translateY(108%)",
              },
              src: AdvantagesImage1,
            },
            {
              position: "100% 50%",
              maxHeight: "422.27px",
              transformOnMount: {
                transform: "translateY(-100%)",
              },
              src: AdvantagesImage2,
            },
          ],
        },
        {
          type: AdvantagesItems.artists,
          title: "Портфолио и галереи",
          text: "Делитесь своими работами: загружайте графику, если вы художник, видеозаписи своих спектаклей и фильмов, или музыку собственного сочинения. Это доступно как творцам, так и объединениям.",
          images: [
            {
              transformDefault: {
                transform: "scale(0.3)",
              },
              position: "60% 4%",
              transformOnMount: {
                transform: "scale(1) translateY(-60%)",
              },
              src: AdvantagesImage3,
            },
          ],
        },
        {
          type: AdvantagesItems.artists,
          title: "Возможности безграничны",
          text: "Творцы могут создавать собственные объединения и вступать в уже существующие. Помимо ваших талантов мир увидит, кто является главой и какую роль он играет в организации мероприятий.",
          images: [
            {
              transformDefault: {
                transform: "scale(0.3)",
              },
              position: "62% 65%",
              transformOnMount: {
                transform: "scale(1) translate(-65%, -62%)",
              },
              src: AdvantagesImage4,
            },
          ],
        },
      ],
    },
    {
      id: "events",
      items: [
        {
          type: AdvantagesItems.events,
          title: "Реализуйте мечту",
          text: "Эфир позволит вам поставить спектакль, провести мастер-класс или конкурс и организовать съемки фильма. Собирайте творцов в объединения, или помогите единомышленникам воплотить идею.",
          images: [
            {
              position: "-94% 16%",
              maxHeight: "452px",
              transformOnMount: {
                transform: "translateY(100%)",
              },
              src: AdvantagesImage5,
            },
            {
              position: "100% 40%",
              maxHeight: "275px",
              transformOnMount: {
                transform: "translateY(-100%)",
              },
              src: AdvantagesImage6,
            },
          ],
        },
        {
          type: AdvantagesItems.events,
          title: "Творческие задачи",
          text: "Глава объединения назначает ответственных творцов, не забывая вносить свой вклад. Артисты выйдут на сцену, музыканты напишут саундтрек, а дизайнер разработает уникальный стиль.",
          images: [
            {
              transformDefault: {
                transform: "scale(0.3)",
              },
              position: "60% 0",
              transformOnMount: {
                transform: "scale(1) translateY(-60%)",
              },
              src: AdvantagesImage7,
            },
          ],
        },
        {
          type: AdvantagesItems.events,
          title: "Файлы и комментарии",
          text: "Прикрепляйте к задачам договора на аренду площадки и пожелания к дизайну плакатов вашего мероприятия. Обсуждать детали можно тут же без лишнего шума в миллионах сторонних чатов.",
          images: [
            {
              transformDefault: {
                transform: "scale(0.3)",
              },
              position: "63% -15%",
              transformOnMount: {
                transform: "scale(1) translate(15%, -63%)",
                transformOrigin: "left",
              },
              src: AdvantagesImage8,
            },
          ],
        },
      ],
    },
    {
      id: "schedule",
      items: [
        {
          type: AdvantagesItems.schedule,
          title: "С уважением к личному",
          text: "При назначении репетиций и встреч необходимо учитывать занятость каждого творца, поэтому Эфир предлагает возможность указать свободное время в графике на каждый месяц.",
          images: [
            {
              position: "0px 90%",
              transformOnMount: {
                transform: "translateX(-90%)",
              },
              src: AdvantagesImage9,
            },
          ],
        },
        {
          type: AdvantagesItems.schedule,
          title: "Не отвлекайтесь от дел",
          text: "Десятки ссылок имеют свойство раздражать людей с творческим складом ума и характера. Глава один раз утверждает график и распределяет даты и время событий, чтобы никто не упустил важное.",
          images: [
            {
              transformDefault: {
                transform: "scale(0.3)",
              },
              position: "60% 4%",
              transformOnMount: {
                transform: "scale(1) translateY(-60%)",
              },
              src: AdvantagesImage10,
            },
          ],
        },
        {
          type: AdvantagesItems.schedule,
          title: "Ничего не потеряется",
          text: "Задачи и события расположены прямо в шапке мероприятия, чтобы без проблем на ходу соотносить важные даты. Никаких лишних кликов и поисков по массивам визуального шума.",
          images: [
            {
              transformDefault: {
                transform: "scale(0.3)",
              },
              position: "62% 65%",
              transformOnMount: {
                transform: "scale(1) translate(-65%, -62%)",
              },
              src: AdvantagesImage11,
            },
          ],
        },
      ],
    },
  ];

  const advantagesContextValue: TAdvantagesContextValue = {
    tabs,
    currentTab,
    handleTabChange,
    advantagesGroups,
  };

  const sectionProps: TSection = {
    id: "advantages",
    gap: 20,
  };

  const titleProps: TSectionTitle = {
    text: ["Подробности и возможности"],
    subtitle: {
      text: "Все в одной экосистеме",
      icon: dataSVG,
      backgroundColor: Colors.Light60,
    },
    typography: Typography.Title_600_68,
    as: "h2",
  };

  return (
    <AdvantagesProvider value={advantagesContextValue}>
      <AdvantagesUI contentSectionProps={{ sectionProps, titleProps }} />
    </AdvantagesProvider>
  );
};
