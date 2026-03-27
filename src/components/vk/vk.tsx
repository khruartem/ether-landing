import type { FC } from "react";

import { SocialsUI } from "../ui/socials";

export const Telegram: FC = () => {
  const url = "https://t.me/otkterr";

  return <SocialsUI type={"telegram"} url={url} />;
};
