import { QueryResult } from "pg";
import { executeFunction } from "../../database/database.utils";
import { calendarsServiceFunctions } from "./calendart.constants";
import { CalendarDB } from "@/app/types/calendar.types";

export const getCalendarService = async () => {
  const { rows }: QueryResult<CalendarDB[]> = await executeFunction(
    calendarsServiceFunctions.GET_CALENDAR,
    []
  );

  return rows;
};
