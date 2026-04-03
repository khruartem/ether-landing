import type { FC } from "react";
import clsx from "clsx";

import type { TGalleryIconProps } from "./types";

import { Colors } from "../../utils/colors";

export const BadgePlus: FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
      <path
        fill={Colors.Nephritis100}
        d="M10.833 5a.833.833 0 1 0-1.666 0v4.167H5a.833.833 0 1 0 0 1.666h4.167V15a.833.833 0 1 0 1.666 0v-4.167H15a.833.833 0 0 0 0-1.666h-4.167V5Z"
      />
    </svg>
  );
};

export const GalleryPlus: FC<TGalleryIconProps> = ({ className }) => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className && className)}
    >
      <path
        d="M23.8334 11C23.8334 9.9875 23.0125 9.16669 22 9.16669C20.9875 9.16669 20.1667 9.9875 20.1667 11V20.1667H11C9.9875 20.1667 9.16669 20.9875 9.16669 22C9.16669 23.0125 9.9875 23.8334 11 23.8334H20.1667V33C20.1667 34.0125 20.9875 34.8334 22 34.8334C23.0125 34.8334 23.8334 34.0125 23.8334 33V23.8334H33C34.0125 23.8334 34.8334 23.0125 34.8334 22C34.8334 20.9875 34.0125 20.1667 33 20.1667H23.8334V11Z"
        fill={Colors.Nephritis100}
      />
    </svg>
  );
};
