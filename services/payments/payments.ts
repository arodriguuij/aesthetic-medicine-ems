// Need to use the React-specific entry point to import createApi
import { Payment } from "@/app/types/payments.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const paymentApi = createApi({
  reducerPath: "paymentApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    payment: builder.mutation<any, Payment>({
      query: (data) => ({
        url: "payment",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { usePaymentMutation } = paymentApi;
