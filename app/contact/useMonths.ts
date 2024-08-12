"use client";

import { useEffect, useState } from "react";
import {
  Calendar,
  generateCurrentAndNextSixMonths,
  getTodayString,
} from "./contact.utils";
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
  const [calendar, setCalendar] = useState(generateCurrentAndNextSixMonths());
  const [selectedMonth, setSelectedMonth] = useState(calendar[0]);
  const [, setSelectedDay] = useState(getTodayString());

  const nextMonths = () => {
    if (selectedMonth.name !== calendar[calendar.length - 2].name) {
      const element = calendar.indexOf(selectedMonth);
      setSelectedMonth(calendar[element + 1]);
    }
  };

  const previousMonths = () => {
    if (selectedMonth.name !== calendar[0].name) {
      const element = calendar.indexOf(selectedMonth);
      setSelectedMonth(calendar[element - 1]);
    }
  };

  useEffect(() => {
    if (status === "fulfilled" && data && calendar)
      setCalendar(addClinicPropertyToCalendar(data, calendar));
  }, [data, status]);

  return {
    selectedMonth,
    nextMonths,
    previousMonths,
    calendar,
    setSelectedDay,
  };
};

export default useMonths;
