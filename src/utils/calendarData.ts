import { Months } from "./months";
import { Week } from "./week";

interface ICalendar {
  date: Date;
  monthCycle: number;
  getMonthWithYear(): string;
  getWeeks(): {
    currentDayIndex: number;
    weekArray: Week[];
  };
  getDays(): number[];
}

export class CalendarModel implements ICalendar {
  protected _date: Date;

  constructor(date: Date) {
    this._date = date;
  }

  get date() {
    return this._date;
  }

  get monthCycle() {
    return 30 * 24 * 60 * 60 * 1000;
  }

  set date(date: Date) {
    this._date = date;
  }

  getMonthWithYear() {
    const month = Months[this.date.getMonth() as keyof typeof Months];
    const year = this.date.getFullYear();

    return `${month}, ${year}`;
  }

  getWeeks() {
    const weekArray: Week[] = ["пн", "вт", "ср", "чт", "пт", "сб", "вск"];

    const currentDayCode = this.date.getDay();
    const currentDayName = Week[currentDayCode as keyof typeof Week];
    const currentDayIndex = weekArray.findIndex(
      (day) => day === currentDayName,
    );

    return { currentDayIndex, weekArray };
  }

  getDays() {
    const iWeekDay = this.getWeeks().currentDayIndex;
    const iMonth = this.date.getMonth();
    const iYear = this.date.getFullYear();

    const length = 32 - new Date(iYear, iMonth, 32).getDate();
    const daysArray: number[] = new Array(length + iWeekDay).fill(1);

    return daysArray.map((day, index) =>
      index < iWeekDay ? (day -= 1) : (day += index - iWeekDay),
    );
  }

  getDay() {
    return this.date.getDate();
  }
}
