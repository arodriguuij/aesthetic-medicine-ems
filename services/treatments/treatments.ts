// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Treatment } from "./treatments.types";

// Define a service using a base URL and expected endpoints
export const treatmentsApi = createApi({
  reducerPath: "treatmentsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getTreatmentsFacialNames: builder.query<
      { id: Treatment["id"]; title: Treatment["title"] }[],
      string
    >({
      query: () => "api/treatments/facial/names",
    }),
    getTreatmentsCorporalNames: builder.query<
      { id: Treatment["id"]; title: Treatment["title"] }[],
      string
    >({
      query: () => "api/treatments/corporal/names",
    }),
    getTreatmentsFacial: builder.query<Treatment[], string>({
      query: () => "api/treatments/facial",
    }),
    getTreatmentsCorporal: builder.query<Treatment[], string>({
      query: () => "api/treatments/corporal",
    }),
    getTreatments: builder.query<Treatment[], string>({
      query: () => "api/treatments",
    }),
    getTreatment: builder.query<Treatment[], string>({
      query: (id) => `api/treatments/${id}`,
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
