// Need to use the React-specific entry point to import createApi
import { DataFormContact } from "@/app/types/emails.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const mailApi = createApi({
  reducerPath: "mailApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    sendMail: builder.mutation<any, DataFormContact>({
      query: (data) => ({
        url: "mail",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSendMailMutation } = mailApi;
