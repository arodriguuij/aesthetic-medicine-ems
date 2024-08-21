// Need to use the React-specific entry point to import createApi
import { Treatment } from "@/app/types/treatments.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const treatmentsApi = createApi({
  reducerPath: "treatmentsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    getTreatmentsFacialNames: builder.query<
      { id: Treatment["id"]; title: Treatment["title"] }[],
      string
    >({
      query: () => "treatments/facial/names",
    }),
    getTreatmentsCorporalNames: builder.query<
      { id: Treatment["id"]; title: Treatment["title"] }[],
      string
    >({
      query: () => "treatments/corporal/names",
    }),
    getTreatments: builder.query<Treatment[], string>({
      query: () => "treatments",
    }),
  }),
});

export const {
  useGetTreatmentsFacialNamesQuery,
  useGetTreatmentsCorporalNamesQuery,
  useGetTreatmentsQuery,
} = treatmentsApi;
