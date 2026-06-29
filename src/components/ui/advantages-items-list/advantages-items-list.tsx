import type { FC } from "react";

import { AdvantagesGroup } from "../../advantages-group";
import { AdvantagesItem } from "../../advantages-item";

import type { TAdvantagesItemsListUIProps } from "./types";

import { useStyle } from "./useStyle";

export const AdvantagesItemsListUI: FC<TAdvantagesItemsListUIProps> = ({
  groups,
}) => {
  const groupsStyle = useStyle();

  return (
    <div style={groupsStyle}>
      {groups.map((group, groupIndex) => (
        <AdvantagesGroup key={groupIndex} group={group}>
          {group.items.map((item, index) => (
            <AdvantagesItem
              key={index}
              item={item}
              groupIndex={groupIndex}
              itemIndex={index}
            />
          ))}
        </AdvantagesGroup>
      ))}
    </div>
  );
};
