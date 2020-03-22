export interface IReport {
  /** TODO think over the interface */
  tempate: any;
  period: "day" | "weekly" | "monthly";
  /** ids IEvents */
  events: string[];
  dates: IDatesPeriod;
}

interface IDatesPeriod {
  start: Date;
  end: Date;
}
