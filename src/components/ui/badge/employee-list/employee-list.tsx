import type { FC } from "react";
import type { TEmployeeListUIProps } from "./types";
import { TextUI } from "../../text";
import { Typography } from "../../../../utils/typography";
import { Colors } from "../../../../utils/colors";
import { AvatarListUI } from "../avatar-list";

import styles from "./employee-list.module.css";

export const EmployeeListUI: FC<TEmployeeListUIProps> = ({
  avatars,
  mainText,
  subText,
}) => {
  return (
    <div className={styles["employee-list"]}>
      <AvatarListUI avatars={avatars} />
      <div className={styles["employee-list__text"]}>
        <TextUI
          as={"span"}
          typography={Typography.Text_400_12}
          color={Colors.Dark80}
        >
          {mainText}
        </TextUI>
        {subText && (
          <TextUI
            as={"span"}
            typography={Typography.Text_400_12}
            color={Colors.Light20}
          >
            {subText}
          </TextUI>
        )}
      </div>
    </div>
  );
};
