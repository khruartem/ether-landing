import type { FC } from "react";

import { GalleryUI } from "../ui/gallery";

import type { TGalleryItem } from "../../utils/types";
import { Colors } from "../../utils/colors";

export const Gallery: FC = () => {
  const gallery: TGalleryItem[] = [
    {
      icon: "music",
      title: "Demo 1",
    },
    {
      icon: "image",
      background:
        "https://storage.yandexcloud.net/otkter-bucket/ether-landing/original/gallery_item_1.png",
    },
    {
      icon: "image",
      background:
        "https://storage.yandexcloud.net/otkter-bucket/ether-landing/original/gallery_item_3.png",
      backhroundColor: Colors.Light80,
    },
    {
      icon: "video",
      background:
        "https://storage.yandexcloud.net/otkter-bucket/ether-landing/original/gallery_item_2.png",
    },
    {
      icon: "music",
      title: "Творчество наших жизней",
    },
  ];
  return <GalleryUI items={gallery} />;
};
