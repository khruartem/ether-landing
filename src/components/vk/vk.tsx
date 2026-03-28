import type { FC } from "react";

import { SocialsUI } from "../ui/socials";

export const VK: FC = () => {
  const url = "https://vk.com/otkter";

  return <SocialsUI type={"vk"} url={url} />;
};
