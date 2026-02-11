import { useState, type FC } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import styles from "./date-picker.module.css"

export const DatePickerUI: FC = () => {
  const [selectedDate, setSelectedDate] = useState();

  return (
    <>
    <DatePicker id="date-picker" name="date-picker" className={styles["react-datepicker"]} />
    <DatePicker showTimeSelect showTimeSelectOnly timeIntervals={15}
      timeCaption="Time"
      dateFormat="h:mm aa" />
    </>
  )
}