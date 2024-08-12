// Need to use the React-specific entry point to import createApi
import { CalendarDB } from "@/app/types/calendar.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const calendarApi = createApi({
  reducerPath: "calendarApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    getCalendar: builder.query<CalendarDB[], string>({
      query: () => "calendar",
    }),
  }),
});

export const { useGetCalendarQuery } = calendarApi;
