// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Treatment } from "./treatments.types";

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
    getTreatmentsFacial: builder.query<Treatment[], string>({
      query: () => "treatments/facial",
    }),
    getTreatmentsCorporal: builder.query<Treatment[], string>({
      query: () => "treatments/corporal",
    }),
    getTreatments: builder.query<Treatment[], string>({
      query: () => "treatments",
    }),
    getTreatment: builder.query<Treatment[], string>({
      query: (id) => `treatments/${id}`,
    }),
  }),
});

export const {
  useGetTreatmentsFacialNamesQuery,
  useGetTreatmentsCorporalNamesQuery,
  useGetTreatmentsQuery,
  useGetTreatmentsCorporalQuery,
  useGetTreatmentsFacialQuery,
  useGetTreatmentQuery,
} = treatmentsApi;
