// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Area } from "./areas.types";
import { Treatment } from "../treatments/treatments.types";

// Define a service using a base URL and expected endpoints
export const areasApi = createApi({
  reducerPath: "areasApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getAreas: builder.query<Area[], string>({
      query: () => "api/areas",
    }),
    getTreatmentsArea: builder.query<
      { treatments: Treatment[]; areaName: string; description: string },
      string
    >({
      query: (id) => `api/areas/${id}`,
    }),
  }),
});

export const {
  useGetTreatmentsAreaQuery,
  useGetAreasQuery,
  useLazyGetTreatmentsAreaQuery,
} = areasApi;
