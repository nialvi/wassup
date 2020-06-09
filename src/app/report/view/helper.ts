import { format } from "date-fns";

export function getTitle(start: number, end: number): string {
  const startDate = format(start, "dd.MM");
  const endDate = format(end, "dd.MM");
  const year = format(end, "yyyy");
  return `${startDate} - ${endDate} ${year}`;
}
