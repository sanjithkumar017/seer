import { customHolidays } from "./constants";
import { GetPayDay } from "./types";

export const getDaysInMonth = (year: number, month: number) =>
  new Date(year, month + 1, 0).getDate();

export const validateHolidays = (
  currentYear: number,
  currentMonth: number,
  currentDay: number
) => {
  return customHolidays[currentYear.toString()][
    currentMonth.toString()
  ].includes(currentDay);
};

export const getPayDay: GetPayDay = (index = 0) => {
  let currentYear = new Date().getFullYear();
  let currentMonth = new Date().getMonth();
  if (index !== 0) {
    if (currentMonth === 0 && index < 0) {
      currentYear = currentYear - 1;
      currentMonth = 11;
    } else if (currentMonth === 11 && index > 0) {
      currentYear = currentYear + 1;
      currentMonth = 0;
    } else {
      currentMonth = currentMonth + index;
    }
  }
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);

  let mayBePayDay = daysInMonth;
  while (mayBePayDay > 0) {
    const date = new Date(currentYear, currentMonth, mayBePayDay);
    const currentDay = date.getDay();

    const isHoliday = validateHolidays(currentYear, currentMonth, mayBePayDay);
    if (currentDay % 6 === 0 || currentDay === 0 || isHoliday) {
      mayBePayDay = mayBePayDay - 1;
    } else {
      const payDay = new Date(currentYear, currentMonth, mayBePayDay);
      return [payDay.toDateString(), payDay.getTime()];
    }
  }
  return ["", 0];
};
