// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const vouchersApi = createApi({
  reducerPath: "vouchersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    checkVoucher: builder.mutation<
      { existsVoucher: boolean; discount: number },
      string
    >({
      query: (voucher) => ({
        url: "vouchers",
        method: "POST",
        body: { voucher },
      }),
    }),
  }),
});

export const { useCheckVoucherMutation } = vouchersApi;
