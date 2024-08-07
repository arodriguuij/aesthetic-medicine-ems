// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Email } from "./mails.types";

// Define a service using a base URL and expected endpoints
export const mailApi = createApi({
  reducerPath: "mailApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    sendMail: builder.mutation<any, Email>({
      query: (data) => ({
        url: "mail",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSendMailMutation } = mailApi;
