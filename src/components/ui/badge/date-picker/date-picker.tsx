import { useState, type FC } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import styles from "./date-picker.module.css"
import { CalendarUI } from "../calendar/calendar";

export const DatePickerUI: FC = () => {
  const [selectedDate, setSelectedDate] = useState();

  return (
    <div style={{display: "flex", flexDirection: "row", gap: "25px"}}>
    <CalendarUI days={[]} weekDayIndex={0} lastDate={0} onClickDay={function (e: React.MouseEvent<HTMLLIElement, MouseEvent>, styles: CSSModuleClasses): void {
        throw new Error("Function not implemented.");
      } } />
    </div>
  )
}