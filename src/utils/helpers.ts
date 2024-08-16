import { customHolidays } from "./constants";

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

export const getPayDay = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);

  let mayBePayDay = daysInMonth;
  while (mayBePayDay > 0) {
    const date = new Date(2024, currentMonth, mayBePayDay);
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
