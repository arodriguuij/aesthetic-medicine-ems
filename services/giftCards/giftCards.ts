// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GiftCardFormWithDiscountApplied,
  GiftCardFormWithDiscountAppliedGet,
} from "../../lib/card/cardSlide";
import { GiftCard } from "@/app/types/giftCards.types";

// Define a service using a base URL and expected endpoints
export const giftCardsApi = createApi({
  reducerPath: "giftCardsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    getGiftCards: builder.query<GiftCard[], string>({
      query: () => "giftCards",
    }),
    addGiftCardOrder: builder.mutation<
      GiftCardFormWithDiscountAppliedGet,
      GiftCardFormWithDiscountApplied
    >({
      query: (data) => ({
        url: "giftCards",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetGiftCardsQuery, useAddGiftCardOrderMutation } =
  giftCardsApi;
