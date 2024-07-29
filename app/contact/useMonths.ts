"use client"

import { useState } from "react";
import { getTodayString } from "./contact.utils";
import { calendar } from "@/public/information/calendar";

const useMonths = () => {
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
  return { selectedMonth, nextMonths, previousMonths, calendar, setSelectedDay };
};

export default useMonths;
