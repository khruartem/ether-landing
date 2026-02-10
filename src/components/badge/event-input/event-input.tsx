import { useState, type ChangeEvent, type FC } from "react";

import { InputUI } from "../../ui/badge/input";

export const EventInput: FC = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const input = evt.target;
    const value = input.value;
    setValue(value);
  };

  return (
    <InputUI
      id="event"
      name="event"
      type="text"
      placeholder="Новое мероприятие"
      value={value}
      onChange={handleChange}
    />
  );
};
