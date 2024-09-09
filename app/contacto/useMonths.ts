"use client";

import { useEffect, useState } from "react";
import {
  Calendar,
  generateCurrentAndNextSixMonths,
  getTodayString,
} from "./contacto.utils";
import { useGetCalendarQuery } from "@/services/calendar/calendar";
import { CalendarDB } from "../types/calendar.types";

const addClinicPropertyToCalendar = (
  data: CalendarDB[],
  calendar: Calendar[]
) => {
  data.forEach((dataItem) => {
    calendar.forEach((calendarItem) => {
      calendarItem.days.forEach((calendarItem) => {
        if (calendarItem.date === dataItem.date) {
          calendarItem.clinic = dataItem.clinic;
        }
      });
    });
  });
  return calendar;
};

const useMonths = () => {
  const { data, error, status } = useGetCalendarQuery("");
  const [calendar, setCalendar] = useState<Calendar[]>();
  const [selectedMonth, setSelectedMonth] = useState<Calendar>();
  const [selectedDay, setSelectedDay] = useState(getTodayString());

  const nextMonths = () => {
    if (selectedMonth && calendar)
      if (selectedMonth.name !== calendar[calendar.length - 2].name) {
        const element = calendar.indexOf(selectedMonth);
        setSelectedMonth(calendar[element + 1]);
      }
  };

  const previousMonths = () => {
    if (selectedMonth && calendar)
      if (selectedMonth.name !== calendar[0].name) {
        const element = calendar.indexOf(selectedMonth);
        setSelectedMonth(calendar[element - 1]);
      }
  };

  useEffect(() => {
    if (status === "fulfilled" && data) {
      const calendar = generateCurrentAndNextSixMonths();
      setCalendar(addClinicPropertyToCalendar(data, calendar));
      setSelectedMonth(calendar[0]);
    }
  }, [data, status]);

  return {
    selectedMonth,
    nextMonths,
    previousMonths,
    calendar,
    setSelectedDay,
    selectedDay,
  };
};

export default useMonths;
