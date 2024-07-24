export interface MonthObject {
  name: string;
  days: { date: string; isCurrentMonth?: boolean; isToday?: boolean }[];
}

export interface DayObject {
  date: string;
  isCurrentMonth?: boolean;
  isToday?: boolean;
}