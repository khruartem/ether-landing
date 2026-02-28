import { useState, type ChangeEvent, type FC } from "react";

import { InputUI } from "../../ui/badge/input";
import { BadgeTitleUI } from "../../ui/badge/badge-title";

export const EventInput: FC = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    console.log(evt);
    const input = evt.target;
    const value = input.value;
    console.log(value);
    setValue(value);
  };

  return (
    <>
      <BadgeTitleUI
        title={{
          text: "Название мероприятия",
          decorated: true,
        }}
      />
      <InputUI
        id="event"
        name="event"
        type="text"
        placeholder="Новое мероприятие"
        value={value}
        onChange={(evt) => handleChange(evt)}
      />
    </>
  );
};
