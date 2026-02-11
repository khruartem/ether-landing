import { useState, type FC } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import styles from "./date-picker.module.css"

export const DatePickerUI: FC = () => {
  const [selectedDate, setSelectedDate] = useState();

  return (
    <div style={{display: "flex", flexDirection: "row", gap: "25px"}}>
    <DatePicker id="date-picker" name="date-picker" />
    <DatePicker id="time-picker" name="time-picker" showTimeSelect showTimeSelectOnly timeIntervals={15}
      timeCaption="Time"
      dateFormat="h:mm aa" />
    </div>
  )
}