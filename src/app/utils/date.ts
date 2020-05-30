import { getISODay, addDays } from "date-fns";

export function getClosestDayOfWeek(dayOfWeek: string, fromDate = new Date()) {
  const dayOfWeekMap: { [key: string]: number } = {
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thur: 4,
    Fri: 5,
    Sat: 6,
    Sun: 7,
  };
  const offsetDays = -(getISODay(fromDate) - dayOfWeekMap[dayOfWeek]);

  return addDays(fromDate, offsetDays);
}
