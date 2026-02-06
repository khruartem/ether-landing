import type { FC } from "react";
import type { TGalleryIconUIProps } from "./types";
import { Image, Music, Video } from "../../../icons";

export const GalleryIconUI: FC<TGalleryIconUIProps> = ({ src }) => {
  switch (src) {
    case "music":
      return <Music />;
    case "video":
      return <Video />;
    case "image":
      return <Image />;
    default:
      return null;
  }
};
